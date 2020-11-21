from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from .models import Books


# Create your views here.

def home(request):

    return render(request,'books/index.html')

def ajax(request):

    if request.method == "POST":

        name = request.POST.get("name")

        price = request.POST.get("price")

        pages = request.POST.get("pages")

        if Books.objects.filter(name=name).exists():

            return JsonResponse({'status':400})
        
        else:

            Books(name=name,price=price,pages=pages).save()

            return JsonResponse({'status':200})



        

    