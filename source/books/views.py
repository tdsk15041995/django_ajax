from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from .models import Books
import json


# Create your views here.

def home(request):

    return render(request,'books/index.html')

def save_books(request):

    if request.method == "POST":

        name = request.POST.get("name")

        price = request.POST.get("price")

        pages = request.POST.get("pages")

        if Books.objects.filter(name=name).exists():

            return JsonResponse({'status':400})
        
        else:

            Books(name=name,price=price,pages=pages).save()

            return JsonResponse({'status':200})

def show_books(request):

    if request.method == "GET":

        json_obj = []

        books = Books.objects.all()

        for book in books:

            json_obj.append({
                'name':book.name,
                'price':book.price,
                'pages':book.pages
            })

        

        return JsonResponse(json.dumps(json_obj),safe=False)



        

    