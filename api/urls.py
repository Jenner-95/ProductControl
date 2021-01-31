from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from django.conf.urls import url
from api import viewsets


router = DefaultRouter()
router.register(r'user', viewsets.UserViewset)
router.register(r'role', viewsets.RoleViewSet)
router.register(r'permission', viewsets.PermissionViewSet)
router.register(r'configurations',viewsets.ConfigurationViewSet)

router.register(r'product',viewsets.ProductViewSet)
router.register(r'shopping',viewsets.ShoppingViewSet)
router.register(r'products',viewsets.ProductAllViewSet, basename="products")
router.register(r'sales',viewsets.SalesViewSet)
router.register(r'reports',viewsets.ReportsViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
    url(r"^api/token", obtain_auth_token, name="api-token"),
    path('api-auth/', include('rest_framework.urls')),
]
