from django.urls import path
from .views import CartDetailView, AddToCartView, UpdateCartItemView, RemoveFromCartView

urlpatterns = [
    path('', CartDetailView.as_view(), name='cart-detail'),
    path('add/', AddToCartView.as_view(), name='add-to-cart'),
    path('item/<uuid:pk>/', UpdateCartItemView.as_view(), name='update-cart-item'),
    path('remove/<uuid:pk>/', RemoveFromCartView.as_view(), name='remove-cart-item'),
]
