from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth import authenticate, login
from .models import Celular, Venta, Reparacion
from .serializers import (
    CelularSerializer, VentaSerializer,
    ReparacionSerializer, UserSerializer
)

class CelularViewSet(viewsets.ModelViewSet):
    queryset = Celular.objects.all()
    serializer_class = CelularSerializer
    permission_classes = [permissions.IsAuthenticated]

class VentaViewSet(viewsets.ModelViewSet):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer
    permission_classes = [permissions.IsAuthenticated]

class ReparacionViewSet(viewsets.ModelViewSet):
    queryset = Reparacion.objects.all()
    serializer_class = ReparacionSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserViewSet(viewsets.ModelViewSet):
    queryset = []
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return []

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    @action(detail=False, methods=['post'])
    def login(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return Response({'success': True})
        return Response({'success': False}, status=400)
