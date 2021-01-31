from django.db import models
from api.utils.baseModel import BaseModel

class Configuration(BaseModel):

    week_for_month=models.FloatField()
    hour_for_week=models.FloatField()
    name_coo=models.CharField(max_length=50)
    email_coo=models.EmailField(null=True,blank=True)
    name_boss_design=models.CharField(max_length=50)
    email_boss_design=models.EmailField(null=True,blank=True)
    name_boss_finance=models.CharField(max_length=50)
    email_boss_finance=models.EmailField(null=True,blank=True)
    name_boss_support=models.CharField(max_length=50)
    email_boss_support=models.EmailField(null=True,blank=True)

    def __str__(self):
        return self.name_coo



