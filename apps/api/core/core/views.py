from django.http import HttpResponse, JsonResponse

def homepage(request):
  return JsonResponse("👋", safe=False)

def aboutpage(request):
  return HttpResponse("Hello About")
