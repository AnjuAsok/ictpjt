function validation()
{
    var t1=document.getElementById('t1').value;
    var t2=document.getElementById('t2').value;
    var t3=document.getElementById('t3').value;
    var t4=document.getElementById('t4').value;
    var t5=document.getElementById('t5').value;

    var name=/^[A-Za-z]+$/;
    var email=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var password=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var phonenumber=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(t1=="")
    {
        document.getElementById('username').innerHTML="Please fill the name field";
        return false;
    }
    else if(!name.test(t1))
    {
        document.getElementById('username').innerHTML="Name should be characters";
        return false;
    }
    else
    {
        document.getElementById('username').innerHTML="";

    }
    if(t2=="")
    {
        document.getElementById('emailid').innerHTML="Please fill the name field";
        return false;
    }
    else if(!email.test(t2))
    {
        document.getElementById('emailid').innerHTML="Please enter a valid email id";
        return false
    }
    else{
        document.getElementById('emailid').innerHTML="";
    }
    if(t3=="")
    {
        document.getElementById('password').innerHTML="Please fill the password ";
        return false;
    }
    // else if(!password.test(t3))
    // {
    //     document.getElementById('password').innerHTML="Please fill the password in correct format ";
    //     return false; 
    // }
    else
    {
        if(t3.length<=6)no=1;
        if(t3.length>6 && (t3.match(/[a-z]/) || t3.match(/\d+/) || t3.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)))no=2;
        if(t3.length>6 && ((t3.match(/[a-z]/) && t3.match(/\d+/)) || (t3.match(/\d+/) && t3.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) || (t3.match(/[a-z]/) && t3.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))))no=3;
        if(t3.length>6 && t3.match(/[a-z]/) && t3.match(/\d+/) && t3.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))no=4;
        if(n==1)document.getElementById('demo').innerHTML="Very poor";
        if(n==2)document.getElementById('demo').innerHTML="Poor";
        if(n==3)document.getElementById('demo').innerHTML="Very poor";
        if(n==4)document.getElementById('demo').innerHTML="Very poor";
        document.getElementById('password').innerHTML="";
        return true;
        
    }
    if(t4=="")
    {
        document.getElementById('confirmpassword').innerHTML="Please reenter the password";
        return false;
    }
    else if(t3!=t4)
    {
        document.getElementById('confirmpassword').innerHTML="Password is not matching ";
        return false; 
    }
    else
    {
        document.getElementById('confirmpassword').innerHTML="";
        
    }
    if(t5=="")
    {
        document.getElementById('phno').innerHTML="Please enter the phone number";
        return false;
    }
    else if(!phonenumber.test(t5))
    {
        document.getElementById('phno').innerHTML="Please enter valid phone number ";
        return false; 
    }
    else
    {
        document.getElementById('phno').innerHTML="";
        
    }
}
// function myfunction()
// {
//         var x=document.getElementById("t3").value;
//         if(t3.length<=6)no=1;
//         if(t3.length>6 && (t3.match(/[a-z]/) || t3.match(/\d+/) || t3.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)))no=2;
//         if(t3.length>6 && ((t3.match(/[a-z]/) && t3.match(/\d+/)) || (t3.match(/\d+/) && t3.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) || (t3.match(/[a-z]/) && t3.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))))no=3;
//         if(t3.length>6 && t3.match(/[a-z]/) && t3.match(/\d+/) && t3.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))no=4;
//         if(n==1)document.getElementById('demo').innerHTML="Very poor";
//         if(n==2)document.getElementById('demo').innerHTML="Poor";
//         if(n==3)document.getElementById('demo').innerHTML="Very poor";
//         if(n==4)document.getElementById('demo').innerHTML="Very poor";
// }