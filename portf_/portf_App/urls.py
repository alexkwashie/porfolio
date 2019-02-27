from . import views
from django.urls import path
from django.conf.urls.static import static


urlpatterns = [
    path ('', views.home, name = 'home'),
]
