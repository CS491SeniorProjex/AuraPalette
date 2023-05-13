from django.db import models

class PaletteFeedback(models.Model):
    query = models.CharField(max_length=240)
    color1 = models.CharField(max_length=6)
    color2 = models.CharField(max_length=6)
    color3 = models.CharField(max_length=6)
    color4 = models.CharField(max_length=6)
    color5 = models.CharField(max_length=6)
    rate = models.IntegerField(max_length=1)
    comment = models.CharField(max_length=500)