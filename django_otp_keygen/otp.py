import hmac
import hashlib
import time
import string
from django_otp_keygen.utils import (
    get_otp_generation_interval,
    get_otp_format,
    get_otp_length,
)


class OTP:
    """Base OTP Class"""

    def __init__(self, key: str, length: int = None):
        self.key = key
        self.length = length
        if not length:
            self.length = get_otp_length()

    @staticmethod
    def _get_time_counter():
        return int(time.time()) // get_otp_generation_interval()

    @staticmethod
    def _format_otp_from_digest(digest: bytes, otp_format: str, length: int = 6) -> str:
        """
        Formats the OTP from the given digest based on the specified format and length.

            :param digest: bytes, the digest to format
            :param otp_format: str, the format of the OTP, can be "digit", "mixed"
            :param length: int, the length of the OTP defaults to 6
            :return: str, the formatted OTP
        """
        # Use digest as integer
        num = int.from_bytes(digest, "big")

        if otp_format == "digit":
            return str(num % (10**length)).zfill(length)

        elif otp_format == "mixed":
            chars = string.ascii_letters + string.digits
            return "".join(chars[num >> (i * 6) % len(chars)] for i in range(length))

        return str(num)[:length]

    def now(self) -> str:
        """
        Generate time based OTP.

            :param key: str
            :param otp_format: _description_
            :param length: _description_, defaults to 6
            :param interval: _description_, defaults to 30
            :return: _description_
        """
        # Counter for OTP
        counter = self._get_time_counter()
        counter_bytes = counter.to_bytes(8, "big")
        # Encode Key
        key_bytes = self.key.encode()
        # Get Otp Format
        otp_format = get_otp_format()
        # Generate HMAC
        h = hmac.new(key_bytes, counter_bytes, hashlib.sha1).digest()
        return self._format_otp_from_digest(h, otp_format, self.length)
