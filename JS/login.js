function OnLoginClicked(event)
{
    user=document.getElementById('txt_username');
    pass=document.getElementById('txt_password');
    error=document.getElementById('errorMessage');
    var userCookie=getCookie(user.value+"username");
    var passCookie=getCookie(user.value+"password");
    if (user.value=="" || user.value==null || pass.value=="" || pass.value==null) {
        error.innerHTML="Username and password required";
        error.style.display="block";
        event.preventDefault();    
        return;
    }
    else{
        error.innerHTML="";
        error.style.display="none";
    }
    if (user.value==userCookie && pass.value==passCookie) {
        error.innerHTML="";
        error.style.display="none";
    }
    else{
        error.innerHTML="Username or password inccorect";
        error.style.display="block";
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



























