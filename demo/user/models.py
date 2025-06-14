from django_otp_keygen.abstract_model import AbstractOtp


class Otp(AbstractOtp):
    """
    This model represents an OTP (One-Time Password) for a user.
    It inherits from AbstractOtp to provide the necessary fields and methods.
    """

    class Meta:
        verbose_name = "OTP"
        verbose_name_plural = "OTPs"
