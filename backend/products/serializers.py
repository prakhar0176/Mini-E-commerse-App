from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    owner=serializers.ReadOnlyField(source='owner.email')

    class Meta:
        model=Product
        fields=['id', 'product_name', 'description', 'price', 'stock', 'owner', 'created_at']

    