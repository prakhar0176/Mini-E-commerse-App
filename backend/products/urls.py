from django.urls import path
from .views import ProductListCreateView, ProductRetrieveUpdateDestroyView, CategoryListCreateView, CategoryDetailView

urlpatterns = [
    path('', ProductListCreateView.as_view(), name='product-list-create'),
    path('<uuid:pk>/', ProductRetrieveUpdateDestroyView.as_view(), name='product-detail'),
    path('categories/', CategoryListCreateView.as_view(), name='category-list-create'),
    path('categories/<uuid:pk>/', CategoryDetailView.as_view(), name='category-detail'),
]
