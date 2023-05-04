from django.shortcuts import render


def calendar(request):
    return render(request, 'agenda/index.html',)
