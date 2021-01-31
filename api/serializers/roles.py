""" Serializer Roles """

# Django REST framework
from rest_framework import serializers

# Model
from api.models import Role
from api.models import Permission

class PermissionReadSerializer( serializers.ModelSerializer ):
    class Meta:
        model = Permission
        fields = ('id','name')

class RoleReadSerializer( serializers.ModelSerializer ):

    permissions = PermissionReadSerializer(many=True)
    class Meta:
        model = Role
        ordering = ('id')
        fields = ('id','name','permissions')