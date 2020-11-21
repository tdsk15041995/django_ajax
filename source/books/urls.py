from django.contrib import admin
from django.urls import path,include
from .views import home,save_books,show_books

urlpatterns = [
    path('',home,name="books-home"),
    path('save_books_details/',save_books,name="save-books"),
    path('show_books_details/',show_books,name="show-books"),

]