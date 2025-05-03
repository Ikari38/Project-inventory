from django.db import models

# Create your models here.


class Client(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    

class Project(models.Model):
    name = models.CharField(max_length=100)
    client = models.ForeignKey(Client, on_delete=models.CASCADE,related_name='projects')

    def __str__(self):
        return self.name
    
class Unit(models.Model):
    name = models.CharField(max_length=50)
    project = models.ForeignKey(Project, on_delete=models.CASCADE,related_name='units')

    def __str__(self):
        return self.name


class Element(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
class Material(models.Model):
    name = models.CharField(max_length=100)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='materials')
    unit = models.ForeignKey(Unit, on_delete=models.SET_NULL, null=True, related_name='materials')
    element = models.ForeignKey(Element, on_delete=models.SET_NULL, null=True, related_name='materials')

    def __str__(self):
        return self.name
