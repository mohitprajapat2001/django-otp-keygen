from django.conf import settings
from django_otp_keygen.utils import encode_to_32_chars


class OtpService:
    """Base OTP Service Class"""

    def __init__(self, user: object, otp_type: str):
        self.user = user
        self.otp_type = otp_type
        self.key = self.generate_otp_key(user, otp_type)

    @staticmethod
    def generate_otp_key(user: object, otp_type: str) -> str:
        """
        Generates a unique OTP key for the user based on the OTP type.
        """
        username_field = settings.AUTH_USER_MDODEL.USERNAME_FIELD
        username = getattr(user, username_field, "username")
        return encode_to_32_chars(username + otp_type)

    def generate_otp(self):
        """
        Method to generate and return the OTP.
        """
        