# Django Rest Framework
from rest_framework import serializers

# Model
from api.models.shopping import Shopping
from api.serializers import ProductRegistroSerializer

class ShoppingSerializer(serializers.ModelSerializer):
    prod = ProductRegistroSerializer()
    class Meta:
        model  = Shopping
        fields = '__all__'
        


class ShoppingRegistroSerializer(serializers.ModelSerializer):

    class Meta:
        model  = Shopping
        fields = (
            'prod',
            'cant',
        )