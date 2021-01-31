# Django Rest Framework
from rest_framework import serializers

# Model
from api.models.sales import Sales
from api.serializers import ProductRegistroSerializer

class SalesSerializer(serializers.ModelSerializer):
    prod = ProductRegistroSerializer()
    class Meta:
        model  = Sales
        fields = '__all__'
        


class SalesRegistroSerializer(serializers.ModelSerializer):

    class Meta:
        model  = Sales
        fields = (
            'prod',
            'cant',
            'price_total',
        )