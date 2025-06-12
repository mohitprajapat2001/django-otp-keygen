from django.conf import settings
from django_otp_keygen.constants import OTP_TYPE_CHOICES
from django.utils import timezone


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
