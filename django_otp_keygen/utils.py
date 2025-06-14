import hashlib

from django.apps import apps
from django.conf import settings
from django.db.models import Model
from django.utils import timezone

from django_otp_keygen.constants import OTP_TYPE_CHOICES, OtpType


def get_model(model_name: str) -> Model:
    """ """
    return apps.get_model(*model_name.split("."))


def get_otp_model() -> Model:
    """
    Returns the OTP model based on the settings.
    If not set, it defaults to 'django_otp_keygen.Otp'.
    """
    otp_model_name = getattr(settings, "OTP_MODEL", None)
    if not otp_model_name:
        raise ValueError(
            "OTP_MODEL setting is not defined. Please set it to your OTP model."
        )
    return get_model(otp_model_name)


def get_otp_type_choices():
    """
    Returns a list of OTP type choices based on the settings.
    """
    return getattr(settings, "OTP_TYPE_CHOICES", OTP_TYPE_CHOICES)


def get_otp_expiry_timedellta():
    """
    Returns the OTP expiry timedelta in seconds based on the settings.
    """
    return getattr(settings, "OTP_EXPIRY_TIME", 300)  # Default to 5 minutes


def get_otp_expiry_time():
    """
    Returns the expiry time for OTP keys based on the current time and configured expiry time.
    """
    expiry_time_delta = get_otp_expiry_timedellta()
    return timezone.now() + timezone.timedelta(seconds=expiry_time_delta)


def get_otp_generation_interval() -> int:
    """
    Returns the OTP generation interval in seconds based on the settings.
    """
    return getattr(settings, "OTP_GENERATION_INTERVAL", 30)  # Default to 30 seconds


def get_otp_length() -> int:
    """
    Returns the length of the OTP based on the settings.
    Defaults to 6 if not set.

    :return: int
    """
    return getattr(settings, "OTP_LENGTH", 6)  # Default to 6 digits


def encode_to_32_chars(s: str) -> str:
    """
    Encodes a string to a 32-character hexadecimal string using MD5 hashing.

    :param s: str
    :return: str
    """

    return hashlib.md5(s.encode("utf-8")).hexdigest()


def get_otp_format() -> tuple[bool, bool]:
    """
    Returns the OTP format based on the settings.
    If both digit and alphanumeric OTPs are disabled, it defaults to digit format.

    :return: tuple[digit_otp: bool, alphanumeric_otp: bool]
    """
    # checks if the setting for generating an alphanumeric OTP is enabled.
    alphanumeric_otp = getattr(settings, "GENERATE_ALPHANUMERIC_OTP", False)
    # if alphanumeric return alphanumeric OTP type
    if alphanumeric_otp:
        return OtpType.ALPHANUMERIC
    return OtpType.DIGITS
