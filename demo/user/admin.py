from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from user.models import Otp


@admin.register(Otp)
class OtpAdmin(admin.ModelAdmin):
    """
    Admin interface for managing OTPs.
    Inherits from UserAdmin to provide a user-friendly interface.
    """

    list_display = ("user", "otp", "created_at", "expired_at")
    search_fields = ("user__username", "otp_type", "status")
    readonly_fields = ("created_at", "_otp")


class UserAdmin(auth_admin.UserAdmin):
    """
    Admin interface for managing users.
    Inherits from UserAdmin to provide a user-friendly interface.
    """

    list_display = ("username", "email", "is_staff", "is_active")
    search_fields = ("username", "email")
    readonly_fields = ("last_login", "date_joined")
    fieldsets = auth_admin.UserAdmin.fieldsets + ((None, {"fields": ("otp",)}),)
