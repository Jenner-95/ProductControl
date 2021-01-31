""" ViewSet Permission """

# Django REST framework
from rest_framework import viewsets

# Model
from api.models import Permission

# Serializers
from api.serializers.permission import PermissionSerializer

class PermissionViewSet( viewsets.ModelViewSet ):

    queryset = Permission.objects.all()
    serializer_class = PermissionSerializer
