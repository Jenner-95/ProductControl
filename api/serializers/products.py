# Django Rest Framework
from rest_framework import serializers

# Model
from api.models.products import Product

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model  = Product
        fields = '__all__'
        


class ProductRegistroSerializer(serializers.ModelSerializer):

    class Meta:
        model  = Product
        fields = (
            'name',
            'price',
            'stock',
            'sample',
            'user',
        )

class ProductReportSerializer(serializers.ModelSerializer):
    total_sales_product = serializers.FloatField(default=0)

    class Meta:
        model = Product
        fields = (
            'name',
            'total_sales_product',
        )
