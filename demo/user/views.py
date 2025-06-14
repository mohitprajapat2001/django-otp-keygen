from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth.views import LoginView
from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView, View


class CustomLoginView(LoginView):
    template_name = "user/login.html"
    redirect_authenticated_user = True

    def get_success_url(self):
        messages.success(self.request, "You have logged in successfully.")
        return reverse_lazy("home")  # Redirect to home after login


custom_login_view = CustomLoginView.as_view()


class CustomRegisterView(CreateView):
    template_name = "user/register.html"
    model = User
    form_class = UserCreationForm
    success_url = reverse_lazy("login")  # Redirect to login after registration

    def get_success_url(self):
        messages.success(self.request, "You have been registered successfully.")
        return reverse_lazy("login")  # Redirect to home after registration


custom_register_view = CustomRegisterView.as_view()


class CustomLogoutView(View):
    def get(self, request):
        from django.contrib.auth import logout

        logout(request)
        # Optionally, you can add a message to indicate successful logout
        messages.success(request, "You have been logged out successfully.")
        # Redirect to login page after logout
        return redirect(reverse_lazy("login"))  # Redirect to login after logout


custom_logout_view = CustomLogoutView.as_view()
