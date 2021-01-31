from rest_framework import serializers
from rest_framework.validators import UniqueValidator 

#model

from api.models.configurations import Configuration 

class ConfigurationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Configuration
        fields="__all__"

class ConfigurationRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=Configuration
        fields=(
            'week_for_month',
            'hour_for_week',
            'name_coo',
            'name_boss_design',
            'name_boss_finance',
            'name_boss_support',
        )
