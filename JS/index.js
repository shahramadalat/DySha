

function OnLoadIndex() {

        var user=document.getElementById('lbl_user');
        var btn_login=document.getElementById('btn_login');
        var getUser = getCookie(window.localStorage.getItem("profile")+"username");
        if (getUser == "undefined" || getUser ==null||getUser=="") {
            user.innerHTML="";
            user.style.display="none";
            btn_login.innerHTML="Login";
        }
        else
        {
            user.innerHTML="Profile: "+getUser;
            user.style.display="block";
            btn_login.innerHTML="Logout";
        }
    
}
function HomeTransfer() {
  var home = document.getElementById("btn_home");
  var url=document.location.search;
}

function OnLoginClickedInIndex()
{
    var btn_login=document.getElementById('btn_login');
    var link_login=document.getElementById('link_login');
    if (btn_login.innerText=="Login") {
        link_login.href="./login.html";
    }
    else{
        window.localStorage.setItem("profile","");
        link_login.href="./index.html";
    }
}

// Sign Up Codes

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
    
    if (user==userCookie) {
        alert("This username has already taken");
        event.preventDefault();
        return;
    }
    else{
        setCookie(user+"username",user,1);
        setCookie(user+"password",pass,1);
        window.localStorage.setItem("profile",user);
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
let profile = "";

// Login Codes
function OnLoginClicked(event)
{
    user=document.getElementById('txt_username');
    profile=user.value;
    window.localStorage.setItem("profile",profile);
    pass=document.getElementById('txt_password');
    error=document.getElementById('errorMessage');
    var userCookie=getCookie(profile+"username");
    var passCookie=getCookie(profile+"password");
    if (profile=="" || profile==null || pass.value=="" || pass.value==null) {
        error.innerHTML="Username and password required";
        error.style.display="block";
        window.localStorage.setItem("profile","");
        event.preventDefault();
        return;
    }
    else{
        error.innerHTML="";
        error.style.display="none";
    }
    if (profile==userCookie && pass.value==passCookie) {
        error.innerHTML="";
        error.style.display="none";
    }
    else{
        error.innerHTML="Username or password inccorect";
        error.style.display="block";
        window.localStorage.setItem("profile","");
        event.preventDefault();
        return;
    }
}
function setCookie(cname,cvalue,exdays=1)
{
    const d= new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    let expires="expires="+d.toUTCString();
    document.cookie=cname+"="+cvalue+";"+expires+";path=/";
}
function getCookie(cname="")
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



