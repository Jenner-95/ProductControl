import json
from rest_framework import status, filters, viewsets
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from api.models import Product
from api.serializers import ProductSerializer, ProductRegistroSerializer


class ProductAllViewSet(viewsets.ModelViewSet):
    # queryset = Product.objects.filter(is_active=True)
    serializer_class = ProductSerializer 
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        if self.request.user.is_authenticated:
            return Product.objects.filter(is_active=True).exclude(user=self.request.user)
        return Product.objects.filter(is_active=True)

