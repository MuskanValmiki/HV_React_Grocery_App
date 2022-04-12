from django.db import models

# Create your models here.

class App(models.Model):
    name = models.CharField("Name", max_length=240)
    location = models.CharField("Location",max_length=240)
    shopTiming = models.CharField("Shop Timing", max_length=240)

    def __str__(self):
        return self.id,self.name,self.location,self.shopTiming