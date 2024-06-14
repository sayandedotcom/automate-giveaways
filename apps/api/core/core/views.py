from django.http import HttpResponse

def homepage(request):
  return HttpResponse("Hello World")

def aboutpage(request):
  return HttpResponse("Hello About")