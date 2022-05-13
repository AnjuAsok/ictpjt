let email=document.getElementById("email");
let error=document.getElementById("error");
// let pwd=document.getElementById("pwd");
function validate()
{
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value))
    {
    
        return true;
    }
    else
    {
        alert("invalid");
        // error.innerHTML="invalid user";
        // error.style.color="red";
        return false;
    }
    // let regexp=/^([A-Za-Z0-9\.-]+)@([A-Za-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    // if(regexp.test(email.value)){
    //     error.innerHTML="valid";
    //     error.style.color="green";
    //     return true;
    // }
    // else{
    //     error.innerHTML="invalid";
    //     error.style.color="green";
    //     return false;
    // }
    
// if(email.value!="admin"||pwd.value!="1234")
// {
//     alert("Invalid user");
//     return false;
// }
// else
// {
//     return true;
// }
}