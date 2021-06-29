from django.shortcuts import render,redirect
from .models import Student,Teacher,Contact
from django.core.mail import send_mail
# Create your views here.

def index(request):
    return render(request,'index.html')
def about(request):
    return render(request,'about.html')
def teacher(request):
    if request.method=="POST":
        name=request.POST['name']
        email=request.POST['email']
        contact=request.POST['contact']
        city=request.POST['teachercity']
        gender=request.POST['gender']
        aadhar=request.POST['aadhar']
        subject=request.POST['subject']
        address=request.POST['address']
        img=request.POST['image']
        send_mail(
            "Registraion",#Subject
            f"New teacher has been registered with \nName:{name}\nEmail:{email}\nContact:{contact}\nCity:{city}\nGender:{gender}\nAadhar:{aadhar}\nSubject:{subject}\nAddress:{address}",#Message
            "goodwillhometution@gmail.com",#From Email
            ["choosefirst9830@gmail.com"]#To Email
        )
        teacher=Teacher(name=name,contact=contact,email=email,city=city,gender=gender,aadhar=aadhar,subject=subject,address=address,img=img,)
        teacher.save()
        print("User Created")
        return render(request,'submit.html',{"message":"Your Response has been recorded \n We will contact you soon!!!"})
    else:
        return render(request,'teacher.html')
def student(request):
    li=[1,2,3,4,5,6,7,8,9,10,11,12]
    if request.method=="POST":
        name=request.POST['name']
        contact=request.POST['contact_number']
        email=request.POST['email']
        city=request.POST['city']
        board=request.POST['board']
        stander=request.POST['standerd']
        gender=request.POST['gender']
        address=request.POST['address']
        subject=request.POST['subject']
        pref=request.POST['pref']
        send_mail(
            "Registraion",#Subject
            f"New Student has been registered with \nName:{name}\nEmail:{email}\nContact:{contact}\nCity:{city}\nGender:{gender}\nSubject:{subject}\nAddress:{address}\nTeacher Preference: {pref}",#Message
            "goodwillhometution@gmail.com",#From Email
            ["choosefirst9830@gmail.com"]#To Email
        )

        student=Student(name=name,contact=contact,email=email,city=city,board=board,stander=stander,gender=gender,address=address,subject=subject,pref=pref)
        student.save()
        print("User Created")
        return render(request,'submit.html',{"message":"Your Response has been recorded we will look best tutor for you."})
    else:
        return render(request,'student.html',{"li":li})

def contact(request):
    if request.method=="POST":
        name=request.POST['name']
        email=request.POST['email']
        phone=request.POST['phone']
        subject=request.POST['subject']
        message=request.POST['message']
        contact=Contact(name=name,email=email,phone=phone,subject=subject,message=message)
        contact.save()
        print("Message Successfully Send")
        return redirect('/')
    else:    
        return render(request,'contact.html')
    pass

def submit(request):
    return render(request,'submit.html')

