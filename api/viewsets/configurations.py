from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

#model 

from api.models.configurations import Configuration 

#serializers
from api.serializers.configurations import ConfigurationSerializer,ConfigurationRegisterSerializer 


class ConfigurationViewSet(viewsets.ModelViewSet):
    queryset = Configuration.objects.all()
    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return ConfigurationSerializer
        else:
            return ConfigurationRegisterSerializer 

    
    @action(detail=False, methods=['get'])
    def get_configuration(self, request):
        queryset=Configuration.objects.all().first()
        serializer=ConfigurationSerializer(queryset)
        return Response(serializer.data,status=status.HTTP_200_OK)

    @action(detail=False, methods=['put'])
    def update_configuration(self,request,*args, **kwargs):
        data=request.data
        try:
            print(data)

            configuration=Configuration.objects.get(pk=data.get('id'))

            configuration.week_for_month=data["week_for_month"]
            configuration.hour_for_week=data["hour_for_week"]
            configuration.name_coo=data["name_coo"]
            configuration.email_coo=data["email_coo"]
            configuration.name_boss_design=data["name_boss_design"]
            configuration.email_boss_design=data["email_boss_design"]
            configuration.name_boss_finance=data["name_boss_finance"]
            configuration.email_boss_finance=data["email_boss_finance"]
            configuration.name_boss_support=data["name_boss_support"]
            configuration.email_boss_support=data["email_boss_support"]
            configuration.save()
            serializer=ConfigurationRegisterSerializer(configuration)
            return Response(serializer.data, status=status.HTTP_200_OK)
      
        except KeyError as e:
            return Response({"detail": "{} is a required field".format(str(e))}, status=status.HTTP_400_BAD_REQUEST)


    

