# Models
from django.db import models

from api.utils.baseModel import BaseModel


class Role(BaseModel):
    name = models.CharField(max_length=15)

    permissions = models.ManyToManyField('Permission', related_name='permission')

    def __str__(self):
        return self.name
