from django.http import JsonResponse

def auth(request):
  return JsonResponse("👋", safe=False)
