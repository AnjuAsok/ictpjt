function getPasswordStrength(password)
{
    le s=0;
    if(password.length>6)
    s++;
    if(password.length>10)
    s++;
    if(/[A-Z]/.test(password))
    s++;
    if(/[0-9]/.test(password))
    s++;
    if(/[^A-Za-z0-9]/.test(password))
    s++;
    return s;

}
