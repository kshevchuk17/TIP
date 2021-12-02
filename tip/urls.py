from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^about/', views.about, name='about'),
    url(r'^description/', views.description, name='description'),
    url(r'^ds_of_belarus/', views.ds_of_belarus, name='ds_of_belarus'),
    url(r'^kinds_of_ds', views.kinds_of_ds, name='kinds_of_ds'),
    url(r'^location/', views.location, name='location'),
    url(r'^top_ds/', views.top_ds, name='top_ds'),
]
