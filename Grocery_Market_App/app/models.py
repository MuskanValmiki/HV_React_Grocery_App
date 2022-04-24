from django.db import models

# Create your models here.

class App(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    location = models.CharField(max_length=120)
    price = models.CharField(max_length=120)


    def _str_(self):
        return self.name