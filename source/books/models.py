from django.db import models

# Create your models here.

class Books(models.Model):

    name = models.CharField(max_length=500,default="")
    price = models.IntegerField()
    pages = models.IntegerField()

    def __str__(self):

        return "pk:{}| name : {}, price :{}, pages:{}".format(self.id,self.name,self.price,\
            self.pages)


    