
function verify()
{
    var u=document.getElementById("user");
    var p=document.getElementById("pwd");
    if(u.value!="admin"||p.value!="Asd@1234")
    {
        alert("invalid user");
        return false;
    }
    else{
        
        return true;
    }
}