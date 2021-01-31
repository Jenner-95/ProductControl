from django.db import models
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from api.utils.baseModel import BaseModel
from api.models.products import Product

class Shopping(BaseModel):
    prod = models.ForeignKey('Product', on_delete=models.CASCADE, related_name="producto")
    cant = models.IntegerField(default=0, verbose_name='cantidad')

    def __str__(self):
        return self.prod.name

@receiver(post_save, sender=Shopping)
def detail_shopping_save(sender, instance,**kwargs):
    id_producto = instance.prod.id

    prod=Product.objects.filter(pk=id_producto).first()
    if prod:
        cantidad = int(prod.stock) + int(instance.cant)
        prod.stock = cantidad
        prod.save()



