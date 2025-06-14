from django.contrib.auth import admin as auth_admin

from django_otp_keygen.admin import OtpAdmin as OTPADMIN


class OtpAdmin(OTPADMIN):
    """
    Admin interface for managing OTPs.
    Inherits from UserAdmin to provide a user-friendly interface.
    """

    pass


class UserAdmin(auth_admin.UserAdmin):
    """
    Admin interface for managing users.
    Inherits from UserAdmin to provide a user-friendly interface.
    """

    list_display = ("username", "email", "is_staff", "is_active")
    search_fields = ("username", "email")
    readonly_fields = ("last_login", "date_joined")
    fieldsets = auth_admin.UserAdmin.fieldsets + ((None, {"fields": ("otp",)}),)
