from django.urls import path
from .views import PlaceOrderView, OrderListView

urlpatterns = [
    path('place/', PlaceOrderView.as_view(), name='place-order'),
    path('my-orders/', OrderListView.as_view(), name='order-history'),
]
