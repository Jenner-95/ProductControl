""" ViewSet Role """

# Django REST framework
from rest_framework import viewsets

# Model
from api.models import Role

# Serializers
from api.serializers.roles import RoleReadSerializer


class RoleViewSet( viewsets.ModelViewSet ):

    queryset = Role.objects.all()
    serializer_class = RoleReadSerializer
