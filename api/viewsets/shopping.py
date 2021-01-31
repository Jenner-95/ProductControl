import json
from django.core.files import File
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, filters, viewsets
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.settings import api_settings
from api.models import Shopping, Product
from api.serializers import ShoppingSerializer, ShoppingRegistroSerializer


class ShoppingViewSet(viewsets.ModelViewSet):
    queryset = Shopping.objects.filter(is_active=True)

    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filter_fields = ("prod", "cant")
    search_fields = ("prod", "cant")
    ordering_fields = ("prod", "cant")

    def get_queryset(self):
            return Shopping.objects.filter(is_active=True, prod__user=self.request.user)

    def get_serializer_class(self):
        """Define serializer for API"""
        if self.action == 'list' or self.action == 'retrieve':
            return ShoppingSerializer
        else:
            return ShoppingRegistroSerializer

    def get_permissions(self):
        """" Define permisos para este recurso """
        if self.action == "create" or self.action == "token":
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]


    def create(self, request, *args, **kwargs):
        try:
            data = request.data
            producto = data.get('prod')
            prod = Product.objects.get(pk=producto)
            serializer = ShoppingRegistroSerializer(data=request.data)
            if(serializer.is_valid()):                
                Shopping.objects.create(
                    prod = prod,
                    cant = data.get('cant'),
                    
                )
                return Response(serializer.data, status=status.HTTP_201_CREATED)        
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        try:
            instancia = self.get_object()
            data = request.data
            producto = data.get('prod')
            prod = Product.objects.get(pk=producto)
            serializer = ShoppingRegistroSerializer(data=request.data)
            if(serializer.is_valid()):                                
                instancia.prod = prod,                
                instancia.cant = data.get('cant')                 
                instancia.save()                              
                return Response(serializer.data, status=status.HTTP_201_CREATED)        
            else:
                Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, *args, **kwargs):
        try: 
            instancia=self.get_object()
            instancia.is_active = False
            instancia.save()
            return Response({'': str(e)}, status=status.HTTP_208_OK)
        except Exception as e:
               return Response({'detail': str(e)}, status=status.HTTP_204_NO_CONTENT)