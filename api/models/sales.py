from django.db import models
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from api.utils.baseModel import BaseModel
from api.models.products import Product

class Sales(BaseModel):
    prod = models.ForeignKey('Product', on_delete=models.CASCADE, related_name="sales")
    cant = models.IntegerField(default=1, verbose_name='cantidad')
    price_total = models.FloatField(null=True, blank=True)

    def __str__(self):
        return self.prod.name

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        res = int(self.prod.price) * int(self.cant)
        self.price_total = float(res)
        super(Sales, self).save()

@receiver(post_save, sender=Sales)
def detalle_fac_guardar(sender,instance,**kwargs):
    product_id = instance.prod.id

    prod=Product.objects.filter(pk=product_id).first()
    if prod:
        quantity = int(prod.stock) - int(instance.cant)
        prod.stock = quantity
        prod.save()

