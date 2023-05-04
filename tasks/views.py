from django.shortcuts import render
from django.http import HttpResponse  # noqa


def tasks(request):
    return render(request, 'tasks/index.html',)
