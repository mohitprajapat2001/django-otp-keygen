# django-otp-keygen

A Django package to generate and manage One-Time Passwords (OTP) for user
authentication. A configurable, pluggable, and extensible OTP generator and validator
for Django.

## Features

- OTP generation and validation
- Easy integration with Django projects
- Secure and extensible

## Installation

```bash
pip install django-otp-keygen
```

## 🔧 Required Configuration

Add the following to your `settings.py`:

```python
OTP_MODEL = "user.Otp"  # Required. Raises ValueError if not configured
```

## ⚙️ Optional Settings

Add the following optional settings to your `settings.py`:

```python
OTP_TYPE_CHOICES = [
    ("email", _("Email Verification OTP")),
    ("phone", _("Phone Verification OTP")),
    ("forgot-password", _("Forgot Password OTP")),
    ("reset-password", _("Reset Password OTP")),
    ("two-factor-authentication", _("Two Factor Authentication OTP")),
]
OTP_GENERATION_INTERVAL = 10  # in seconds, default is 30
OTP_LENGTH = 6  # default is 6
GENERATE_ALPHANUMERIC_OTP = True  # default is False
```

## 🧱 Abstract Model Example

Create your custom model using `AbstractOtp`:

```python
from django_otp_keygen.models import AbstractOtp

class Otp(AbstractOtp):
    pass
```

## Extend Admin

Create your custom admin using `AbstractOtpAdmin`:

```python
from django_otp_keygen.admin import AbstractOtpAdmin


class OtpAdmin(AbstractOtpAdmin):
    """
    Admin interface for managing OTPs.
    Inherits from UserAdmin to provide a user-friendly interface.
    """

    pass
```

## 🔐 Usage: OTP Service

```python
from django_otp_keygen.services import OtpService

otp_service = OtpService(user, "email")
otp_value = otp_service.generate_otp()

# To verify
is_valid = otp_service.verify_otp(input_otp)
```

## ✅ OTP Validation Logic

- Ensures OTP is not expired (expired_at)

- Prevents re-verification

- Automatically sets new expiration on generation

- OTP format is digit or alphanumeric based on settings

## 🧪 Model Properties

- `otp_instance.is_expired`

- `otp_instance.is_verified`

- `otp_instance.is_pending`

- `otp_instance.is_active`

## 🔍 Settings Reference

| Setting                     | Type           | Default    | Description                    |
| --------------------------- | -------------- | ---------- | ------------------------------ |
| `OTP_MODEL`                 | str            | —          | Required. Points to your model |
| `OTP_TYPE_CHOICES`          | list of tuples | predefined | Custom OTP purpose types       |
| `OTP_GENERATION_INTERVAL`   | int            | `30`       | OTP valid window in seconds    |
| `OTP_LENGTH`                | int            | `6`        | OTP length                     |
| `GENERATE_ALPHANUMERIC_OTP` | bool           | `False`    | Use mixed alphanumeric format  |

## 📁 Directory Structure

```bash
django_otp_keygen/
├── models.py
├── services.py
├── otp.py
├── utils.py
├── constants.py
```

## Contributing

Contributions, issues, and feature requests are welcome!

If you'd like to help improve django-otp-keygen, please follow these steps:

1. 🍴 Fork the repository

2. 🛠️ Create a new branch (`git checkout -b feature/your-feature`)

3. 💾 Make your changes

4. 🧪 Write or update tests if needed

5. 📩 Commit your changes and push (git push origin feature/your-feature)

6. 📝 Open a pull request describing your changes

## License

This reposiitory is under [MIT License](./LICENCE).

## Donations

If you find this useful, consider sponsoring or donating.
