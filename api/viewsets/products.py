import json
import base64
from django.core.files import File
from django.core.files.base import ContentFile
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, filters, viewsets
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.settings import api_settings
from api.models import Product, User
from api.serializers import ProductSerializer, ProductRegistroSerializer


def base64_file(data, name=None):
    print(data)
    _format, _img_str = data.split(';base64,')
    _name, ext = _format.split('/')
    if not name:
        name = _name.split(":")[-1]
    return ContentFile(base64.b64decode(_img_str), name='{}.{}'.format(name, ext))


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.filter(is_active=True)

    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filter_fields = ("name", "price")
    search_fields = ("name", "price")
    ordering_fields = ("name", "price")

    def get_queryset(self):
        if self.request.user.is_authenticated:
            return Product.objects.filter(is_active=True, user=self.request.user)
        return Product.objects.filter(is_active=True)


    def get_serializer_class(self):
        """Define serializer for API"""
        if self.action == 'list' or self.action == 'retrieve':
            return ProductSerializer
        else:
            return ProductRegistroSerializer

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
            data['sample'] = base64_file(data.get('sample'))

            usuario = data.get('user')
            user = User.objects.get(pk=usuario)
            
            serializer = ProductRegistroSerializer(data=request.data)
            if(serializer.is_valid()):                
                Product.objects.create(
                    name = data.get('name'),
                    price = data.get('price'),
                    stock = data.get('stock'),
                    sample = data.get('sample'),
                    user = user,
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

            serializer = ProductRegistroSerializer(data=request.data)
            print(serializer.is_valid())
            if(serializer.is_valid()):                                
                if data.get('sample') is not None:
                    instancia.sample = base64_file(data.get('sample'))
                usuario = data.get('user')
                user = User.objects.get(pk=usuario)
                instancia.name = data.get('name')                
                instancia.price = data.get('price')                
                instancia.stock = data.get('stock')                
                instancia.user = user        
                
                instancia.save()                              
                return Response(serializer.data, status=status.HTTP_201_CREATED)        
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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