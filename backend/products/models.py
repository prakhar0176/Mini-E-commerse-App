from django.db import models
import uuid
from django.conf import settings

class Product(models.Model):
    id=models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    owner=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='products')
    product_name=models.CharField(max_length=255)
    description=models.TextField(blank=True)
    price=models.DecimalField(max_digits=10, decimal_places=2)
    stock=models.PositiveIntegerField()
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product_name

