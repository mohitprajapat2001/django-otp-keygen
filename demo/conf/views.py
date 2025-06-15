from django.conf import settings
from django.contrib import messages
from django.shortcuts import redirect, render
from django.urls import reverse
from django.views.generic import TemplateView, View
from django_otp_keygen.constants import OtpStatus
from user.models import Otp

from django_otp_keygen.otp_service import OtpService


class HomeView(TemplateView):
    template_name = "home.html"

    @staticmethod
    def generate_otp(request, context):
        try:
            otp_service = OtpService(
                user=request.user, otp_type=request.POST.get("otp_type")
            )
            generated_otp = otp_service.generate_otp()
            context["generated_otp"] = generated_otp
            messages.success(request, "OTP generated successfully.")
        except Exception as err:
            messages.error(
                request, err.message or "An error occurred while generating the OTP."
            )

    @staticmethod
    def verify_otp(request):
        try:
            otp_service = OtpService(
                user=request.user, otp_type=request.POST.get("otp_type")
            )
            is_verified = otp_service.verify_otp(request.POST.get("otp"))
            if is_verified:
                messages.success(request, "OTP verified successfully.")
            else:
                messages.error(request, "Invalid OTP. Please try again.")
        except Exception as err:
            messages.error(
                request, err.message or "An error occurred while verifying the OTP."
            )

    def post(self, request, *args, **kwargs):
        # Logic to handle OTP generation
        context = self.get_context_data()
        if not request.user.is_authenticated:
            messages.error(request, "You must be logged in to generate an OTP.")
            return redirect(reverse("login"))
        if not request.POST.get("otp_type"):
            messages.error(request, "Please select an OTP type.")
            return render(request, self.template_name, context)
        if request.POST.get("otp"):
            self.verify_otp(request)
        else:
            self.generate_otp(request, context)
        return render(request, self.template_name, context)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update(
            {
                "otp_types": settings.OTP_TYPE_CHOICES,
            }
        )
        return context


home_view = HomeView.as_view()


class ClearView(View):
    def get(self, request, *args, **kwargs):
        try:
            otp_service = Otp.objects.filter(
                user=request.user, status=OtpStatus.VERIFIED
            )
            if otp_service:
                otp_service.delete()
            messages.success(request, "OTP cleared successfully.")
        except Exception as err:
            messages.error(
                request, err.message or "An error occurred while clearing the OTP."
            )
        return redirect(reverse("home"))


clear_view = ClearView.as_view()


class DocsView(TemplateView):
    template_name = "docs.html"


docs_view = DocsView.as_view()
