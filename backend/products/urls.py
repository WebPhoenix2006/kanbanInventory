from django.urls import path
from .views import products_view

urlpatterns = [
    path('api/products/', products_view),  # Handles both GET and POST
]
