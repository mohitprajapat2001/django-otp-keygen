from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = "home.html"


home_view = HomeView.as_view()


class DocsView(TemplateView):
    template_name = "docs.html"


docs_view = DocsView.as_view()
