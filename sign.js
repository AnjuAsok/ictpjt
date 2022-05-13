function signup()
{
    let name=document.getElementById("t1").value;
    let email=document.getElementById("t2").value;
    let ph=document.getElementById("t3").value;
    let pwd=document.getElementById("t4").value;
    let cpwd=document.getElementById("t5").value;


    let letters=/^[A-Za-z]+$/;
    // let regularexp=/^([A-Za-z0-9\.-]+)@([A-za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    // let phone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    // let password=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;

    if(name=='')
    {
        //alert("Please enter your name.");
        return false;
    }
    // else if(!letters.test(name))
    // {
    //     alert("Name field required only alphabet characters");
    //     return false;
    // }
    // else if(email=='')
    // {
    //     alert("Please enter your email id");
    // }
    // else if(!email.test(regularexp))
    // {
    //     alert("Please enter a valid email address");
    // }
    // else if(ph=='')
    // {
    //     alert("Please enter your phone number");
    // }
    // else if(!ph.test(phone))
    // {
    //     alert("Please enter a valid phone number");
    // }
    // else if(pwd=='')
    // {
    //     alert("Please enter a password.")
    // }
    // else if(!pwd.test(password))
    // {
    //     alert("Please enter a strong password");
    // }
    // else if(cpwd=='')
    // {
    //     alert("Reenter your password.")
    // }
    // else if(pwd!=cpwd)
    // {
    //     alert("Password not matched.");
    // }
    else
    {
        //alert("Success");
        return true;
    }
}