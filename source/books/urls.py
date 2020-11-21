from django.contrib import admin
from django.urls import path,include
from .views import home,ajax

urlpatterns = [
    path('',home,name="books-home"),
    path('save_book_details/',ajax,name="ajax"),
]