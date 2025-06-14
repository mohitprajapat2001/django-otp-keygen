try:
    from settings.dev import *  # noqa
except ImportError:
    from settings.prod import *  # noqa
