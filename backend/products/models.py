from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    quantity = models.IntegerField()
    unit = models.CharField(max_length=50)
    exp_date = models.DateField()
    threshold = models.IntegerField()
    category = models.CharField(max_length=100)  # <-- Added this line

    def __str__(self):
        return self.name
