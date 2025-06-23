from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Order, OrderItem
from cart.models import Cart
from products.models import Product
from .serializers import OrderSerializer
from decimal import Decimal

class PlaceOrderView(generics.CreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        user = request.user
        try:
            cart = user.cart
            if not cart.items.exists():
                return Response({"error": "Cart is empty."}, status=status.HTTP_400_BAD_REQUEST)

            order = Order.objects.create(user=user)
            total = Decimal(0)

            for item in cart.items.all():
                OrderItem.objects.create(
                    order=order,
                    product=item.product,
                    quantity=item.quantity,
                    price=item.product.price
                )
                total += item.product.price * item.quantity

            order.total_amount = total
            order.save()

            cart.items.all().delete()  # clear cart
            return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class OrderListView(generics.ListAPIView):
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user).order_by('-created_at')
