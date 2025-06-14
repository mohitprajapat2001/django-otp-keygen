try:
    from demo.settings.dev import *  # noqa
except ImportError:
    from demo.settings.prod import *  # noqa
