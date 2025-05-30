from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    quantity = models.IntegerField()
    unit = models.CharField(max_length=50)  # <-- This is a string
    exp_date = models.DateField()
    threshold = models.IntegerField()
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.name
