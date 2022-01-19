function checkCookie() {
    
}
function p()
{
    let pass=document.getElementById('txt_password').value;;
    let verify=document.getElementById('txt_verify_password').value;

    if (pass!=verify) 
    {
        document.getElementById('lbl_password_error').innerHTML=('Passwords must match');
        document.getElementById('lbl_password_error').style.display="block";

        return;
    }
    else
    {
        document.getElementById('lbl_password_error').innerHTML=('');
        document.getElementById('lbl_password_error').style.display="none";
    }
    if (pass.length<4) 
    {
        document.getElementById('lbl_password_error').innerHTML=('Password is to short');
        document.getElementById('lbl_password_error').style.display="block";
        return;
    }
    else{
        document.getElementById('lbl_password_error').innerHTML=('');
        document.getElementById('lbl_password_error').style.display="none";
    }

    
}
function require(event)
{
    let pass=document.getElementById('txt_password').value;;
    let verify=document.getElementById('txt_verify_password').value;
    let user=document.getElementById('txt_username').value;
    let lblError = document.getElementById('lbl_user_error');
   
    if (user == null || user== "") {
        document.getElementById('lbl_user_error').innerHTML=('Username required!');
        document.getElementById('lbl_user_error').style.display="block";
        event.preventDefault();
        return;
    }
    else
    {
        document.getElementById('lbl_user_error').innerHTML=('');
        document.getElementById('lbl_user_error').style.display="none";
    }
    if (pass==null || pass == "" || verify == "" || verify==null) {
        document.getElementById('lbl_password_error').style.display="block";
        document.getElementById('lbl_password_error').innerHTML=('Password required!');
        event.preventDefault();
        return;
    }
    else
    {
        document.getElementById('lbl_password_error').style.display="none";
        document.getElementById('lbl_password_error').innerHTML="";
    }
   
    if (!isUserNameValid(String(user))) 
    {
        lblError.innerHTML="Usernames can only have: "+"<br>"+
        "- Lowercase Letters (a-z) "+"<br>"+
        "- Numbers (0-9)"+"<br>"+
        "- Dots (.)"+"<br>"+
        "- Underscores (_)";
        document.getElementById('lbl_user_error').style.display="block";
        event.preventDefault();
        return;
    }
    else
    {
        lblError.style.display="none";
        lblError.value="";
    }
    if (pass!=verify) 
    {
        document.getElementById('lbl_password_error').innerHTML=('Passwords must match');
        document.getElementById('lbl_password_error').style.display="block";
        event.preventDefault();
        return;
    }
    else
    {
        document.getElementById('lbl_password_error').innerHTML=('');
        document.getElementById('lbl_password_error').style.display="none";
    }
    if (user.length<5) {
        document.getElementById('lbl_user_error').innerHTML=('Username is to short');
        document.getElementById('lbl_user_error').style.display="block";
        event.preventDefault();
        return;
    }
    else{
        document.getElementById('lbl_user_error').innerHTML=('');
        document.getElementById('lbl_user_error').style.display="none";
    }
    if (pass.length<4) 
    {
        document.getElementById('lbl_password_error').innerHTML=('Password is to short');
        document.getElementById('lbl_password_error').style.display="block";
        event.preventDefault();
        return;
    }
    else{
        document.getElementById('lbl_password_error').innerHTML=('');
        document.getElementById('lbl_password_error').style.display="none";
    }

    var userCookie = getCookie(user+"username");
    alert(userCookie);
    if (user==userCookie) {
        alert("This username has already taken");
        event.preventDefault();
        return;
    }
    else{
        setCookie(user+"username",user,1);
        setCookie(user+"password",pass,1);
    }


}

function userValidate()
{

    let user=document.getElementById('txt_username');
    let lblError = document.getElementById('lbl_user_error');
    if (!isUserNameValid(String(user.value))) 
    {
        lblError.innerHTML="Usernames can only have: "+"<br>"+
        "- Lowercase Letters (a-z) "+"<br>"+
        "- Numbers (0-9)"+"<br>"+
        "- Dots (.)"+"<br>"+
        "- Underscores (_)";
        document.getElementById('lbl_user_error').style.display="block";
        return;
    }
    else
    {
        lblError.style.display="none";
        lblError.value="";
    }
    if (user.value.length<5) {
        document.getElementById('lbl_user_error').innerHTML=('Username is to short');
        document.getElementById('lbl_user_error').style.display="block";
        return;
    }
    else{
        document.getElementById('lbl_user_error').innerHTML=('');
        document.getElementById('lbl_user_error').style.display="none";
    }
}
function isUserNameValid(username)
 {
    /* 
        Usernames can only have: 
        - Lowercase Letters (a-z) 
        - Numbers (0-9)
        - Dots (.)
        - Underscores (_)
    */
    const res = /^[A-Za-z0-9_@\.]+$/.exec(username);
    const valid = !!res;
    return valid;
}
function setCookie(cname,cvalue,exdays=1)
{
    const d= new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    let expires="expires="+d.toUTCString();
    document.cookie=cname+"="+cvalue+";"+expires+";path=/";
}
function getCookie(cname)
{
    let name=cname+"=";
    let decodedCookie=decodeURIComponent(document.cookie);
    let ca=decodedCookie.split(";");
    for(let i=0; i<ca.length; i++)
    {
        let c=ca[i];
        while(c.charAt(0)==' ')
        {
            c=c.substring(1);
        }
        if (c.indexOf(name)==0)
        {
            return c.substring(name.length,c.length)    
        }
    }
    return "";
}










