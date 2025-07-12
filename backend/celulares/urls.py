from rest_framework.routers import DefaultRouter
from .views import CelularViewSet, VentaViewSet, ReparacionViewSet, UserViewSet

router = DefaultRouter()
router.register(r'celulares', CelularViewSet)
router.register(r'ventas', VentaViewSet)
router.register(r'reparaciones', ReparacionViewSet)
router.register(r'usuarios', UserViewSet, basename='usuarios')

urlpatterns = router.urls
