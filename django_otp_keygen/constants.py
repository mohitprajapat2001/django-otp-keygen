from django.utils.translation import gettext_lazy as _
from django.db.models import TextChoices

OTP_TYPE_CHOICES = [
    ("sms", _("SMS-based OTP")),
    ("email", _("Email-based OTP")),
]


class OtpStatus(TextChoices):
    """
    Enum-like class for OTP status.
    """

    PENDING = "pending", _("Pending")
    VERIFIED = "verified", _("Verified")


class OtpType(TextChoices):
    """
    Enum-like class for OTP types.
    """

    DIGITS = "digits"
    ALPHANUMERIC = "alphanumeric"
