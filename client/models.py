from django.db import models

# Create your models here.
class Teacher(models.Model):
    name=models.CharField(max_length=50)
    contact=models.CharField(max_length=10)
    email=models.EmailField(max_length=50)
    city=models.CharField(max_length=50)
    gender=models.CharField(max_length=10)
    aadhar=models.CharField(max_length=12)
    subject=models.CharField(max_length=50)
    address=models.TextField()
    img=models.ImageField(upload_to='img/Teacher')

class Student(models.Model):
    name=models.CharField(max_length=50)
    contact=models.CharField(max_length=10)
    email=models.EmailField(max_length=50)
    city=models.CharField(max_length=50)
    board=models.CharField(max_length=50)
    stander=models.IntegerField()
    gender=models.CharField(max_length=10)
    subject=models.CharField(max_length=50)
    address=models.TextField()
    pref=models.CharField(max_length=50)

class Contact(models.Model):
    name=models.CharField(max_length=50)
    email=models.EmailField(max_length=50)
    phone=models.CharField(max_length=10)
    subject=models.CharField(max_length=50)
    message=models.TextField()

