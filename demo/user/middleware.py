from django.shortcuts import redirect
from django.urls import reverse
from django.utils.deprecation import MiddlewareMixin


class LoginRequiredMiddleware(MiddlewareMixin):
    """
    Middleware to ensure the user is authenticated to access protected pages.
    """

    def process_request(self, request):
        allowed_paths = [
            reverse("login"),
            reverse("register"),
            reverse("logout"),
        ]

        # Skip for static/media paths or if user is already authenticated
        if (
            request.path.startswith("/static/")
            or request.path.startswith("/media/")
            or request.user.is_authenticated
            or request.path in allowed_paths
        ):
            return None

        # Save current path to session to redirect after login
        request.session["next"] = request.path
        return redirect(reverse("login"))
