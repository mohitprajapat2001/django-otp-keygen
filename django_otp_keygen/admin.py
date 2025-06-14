from django.contrib import admin

from django_otp_keygen.utils import get_otp_model

Otp = get_otp_model()


@admin.register(Otp)
class AbstractOtpAdmin(admin.ModelAdmin):
    """
    Admin interface for managing OTPs.
    Inherits from UserAdmin to provide a user-friendly interface.
    """

    list_display = ("user", "otp", "otp_type", "status", "created_at", "expired_at")
    search_fields = ("user__username", "otp_type", "status")
    readonly_fields = ("created_at", "_otp", "key", "updated_at")
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "user",
                    "otp_type",
                    "status",
                )
            },
        ),
        (
            "Otp Secrets",
            {
                "fields": (
                    "_otp",
                    "key",
                    "expired_at",
                )
            },
        ),
        (
            "Timestamps",
            {
                "fields": (
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )
