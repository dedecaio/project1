from django.shortcuts import render
from django.http import HttpResponse

def tasks(request, *args, **kwargs):
    return HttpResponse("Olá Mundo")