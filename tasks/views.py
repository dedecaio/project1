from django.shortcuts import render
from django.http import HttpResponse  # noqa


def tasks(request, *args, **kwargs):
    return render(request, 'tasks/index.html',)
