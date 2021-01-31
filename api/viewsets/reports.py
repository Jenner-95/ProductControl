from rest_framework.viewsets import GenericViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

# from django.contrib.auth.models import User

from api.models import Product, Sales, User
from django.db.models import Q, Count, Sum
from api.serializers import ProductReportSerializer, UserReportSerializer


class ReportsViewSet(GenericViewSet):
    queryset =  Product.objects.filter(is_active=True)


    @action(detail=False, methods=['get'])
    def reportCustomer(self, request):
        try:
            producto = Product.objects.filter(is_active=True, user=self.request.user)

            total_sales_unit = producto.annotate(
                total_sales_product = Sum("sales__price_total", filter=Q(sales__is_active=True))
            )

            user = User.objects.filter(is_active=True, username=self.request.user)

            total_sales_global = user.annotate(
                total_sales_user = Sum("products__sales__price_total", filter=Q(products__sales__is_active=True))
            )

            product = Product.objects.filter(is_active=True, user=self.request.user)
            counter = product.count()
            prom = product.aggregate(summary = Sum("price"))['summary']
            average_prices = prom/counter

            data = {
                'total_sales_unit': ProductReportSerializer(total_sales_unit, many=True).data,
                'total_sales_global': UserReportSerializer(total_sales_global, many=True).data,
                'average_catalogue_products': average_prices,

                
            }
            return Response(data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
