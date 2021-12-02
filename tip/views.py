from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'templates/index/index.html')


def about(request):
    return render(request, 'templates/about/aboutPage.html')


def description(request):
    return render(request, 'templates/description/descriptionPage.html')


def ds_of_belarus(request):
    return render(request, 'templates/DSofBelarus/DSofBelarus.html')


def kinds_of_ds(request):
    return render(request, 'templates/kindsOfDS/kindsOfDS.html')


def location(request):
    return render(request, 'templates/location/locationPage.html')


def top_ds(request):
    return render(request, 'templates/topDS/topDS.html')
