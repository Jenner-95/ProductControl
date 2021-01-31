from django.db import models
from api.utils.baseModel import BaseModel

class Product(BaseModel):
    name=models.CharField(max_length=50)
    price=models.FloatField()
    stock = models.IntegerField(default=0, verbose_name='Existencia', null=True, blank=True)
    sample = models.ImageField(upload_to='Products', null=True, blank=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name="products")


    def __str__(self):
        return self.name



