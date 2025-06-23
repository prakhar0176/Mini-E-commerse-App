from rest_framework import serializers
from .models import Product, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'created_at']


class ProductSerializer(serializers.ModelSerializer):
    owner=serializers.ReadOnlyField(source='owner.email')
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), required=False)


    class Meta:
        model=Product
        fields=['id', 'product_name', 'description', 'price', 'stock', 'category', 'owner', 'created_at']




    