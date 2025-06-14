from django.conf import settings

from django_otp_keygen.utils import encode_to_32_chars, get_model, get_otp_model


class OtpService:
    """Base OTP Service Class"""

    def __init__(self, user: object, otp_type: str):
        self.user = user
        self.otp_type = otp_type
        self.key = self.generate_otp_key(user, otp_type)
        self.OtpModel = get_otp_model()

    @staticmethod
    def generate_otp_key(user: object, otp_type: str) -> str:
        """
        Generates a unique OTP key for the user based on the OTP type.
        """
        username_field = get_model(settings.AUTH_USER_MODEL).USERNAME_FIELD
        username = getattr(user, username_field, "username")
        return encode_to_32_chars(username + otp_type)

    def get_otp(self):
        """
        Method to retrieve the OTP.
        """
        otp, _ = self.OtpModel.objects.get_or_create(
            user=self.user, otp_type=self.otp_type, key=self.key
        )
        return otp

    def generate_otp(self) -> str:
        """
        This method uses the OTP instance to generate a new OTP

        :returns: str, the generated OTP value.
        """
        otp_instance = self.get_otp()
        # Generate the OTP using the OTP instance
        generated_otp = otp_instance.generate_otp()
        otp_instance.otp = generated_otp
        otp_instance.set_expired()
        otp_instance.save()
        return generated_otp

    def verify_otp(self, otp_value: str) -> bool:
        """
        Verify the provided OTP value against the stored OTP.

        :param otp_value: str, the OTP value to verify.
        :returns: bool, True if the OTP is valid, False otherwise.
        """
        otp_instance = self.get_otp()
        return otp_instance.validate_otp(otp_value)
