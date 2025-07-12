from django.db import models
from django.contrib.auth.models import User

class Celular(models.Model):
    marca = models.CharField(max_length=100)
    modelo = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    descripcion = models.TextField(blank=True)

    def __str__(self):
        return f"{self.marca} {self.modelo}"

class Venta(models.Model):
    celular = models.ForeignKey(Celular, on_delete=models.CASCADE)
    cliente = models.CharField(max_length=100)
    fecha = models.DateField(auto_now_add=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2)

class Reparacion(models.Model):
    ESTADOS = (
        ('pendiente', 'Pendiente'),
        ('en_progreso', 'En progreso'),
        ('completado', 'Completado'),
    )
    celular = models.ForeignKey(Celular, on_delete=models.CASCADE)
    descripcion = models.TextField()
    fecha_inicio = models.DateField(auto_now_add=True)
    fecha_fin = models.DateField(null=True, blank=True)
    estado = models.CharField(max_length=20, choices=ESTADOS, default='pendiente')
