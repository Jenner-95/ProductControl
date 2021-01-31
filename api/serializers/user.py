""" SERIALIZER User """

# Django REST framework 
from rest_framework import serializers
from rest_framework.validators import UniqueValidator 

# Model
from api.models import User
from api.models import Profile

# Serializers
from api.serializers.roles import RoleReadSerializer


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'



class UserSerializer(serializers.ModelSerializer):

    # profile = ProfileSerializer(required=False)
    email = serializers.CharField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all(), message='The email must be unique')]
    )

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'first_name',
            'last_name',
            'email',
            'password',
            # 'profile',
            # 'role'
        )


class UserPermissionReadSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(required=False)
    role = RoleReadSerializer()

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'first_name',
            'last_name',
            'is_superuser',
            'is_staff',
            'is_verified',
            'email',
            'profile',
            'role'
        )

class UserReadSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(required=False)
    role = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'first_name',
            'last_name',
            'is_superuser',
            'is_staff',
            'email',
            'profile',
            'role'
        )


class UserReportSerializer(serializers.ModelSerializer):
    total_sales_user = serializers.FloatField(default=0)

    class Meta:
        model = User
        fields = (
            'first_name',
            'last_name',
            'total_sales_user',
        )