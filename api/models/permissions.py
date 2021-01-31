# Models
from django.db import models

from api.utils.baseModel import BaseModel


class Permission(BaseModel):
    name = models.CharField(max_length=15)

    # RelationShip
    # role = models.ManyToManyField('Role', related_name='permission')
