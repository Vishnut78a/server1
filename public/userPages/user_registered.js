var userRegisteredMessage = document.getElementById('userRegisteredMessage');
var logOutBTN = document.getElementById('logOutBTN');


console.log("document.cookie:---",document.cookie);


logOutBTN.addEventListener('mousedown',function(){
    logOutBTN.style.transform = "scale(0.5)";

});

logOutBTN.addEventListener('mouseup', async function(){
    logOutBTN.style.transform = "scale(1)";
    console.log("adfsafasdfsf");
    
    //https://server1-1-0gsu.onrender.com/logout
    //http://localhost:8080/logout
    let logOut = await fetch("https://server1-1-0gsu.onrender.com/logout",{
        method:"POST",
        credentials:"include"
    });

    logOut = await logOut.json();
    console.log("logOut.success",logOut.success);
    if(logOut.success){window.location.href= "/login";}

})

document.addEventListener('mouseup',function(){
    logOutBTN.style.transform = "scale(1)";

});

























/*
function welcomeUser(){
    userRegisteredMessage.innerHTML = `Welcome ${userdata}!,
    <br>You have been registered Successfully;`
}
*/
//welcomeUser();
//var params = new URLSearchParams(window.location.search);
//console.log(params);var username = params.get('userName');
//console.log(username);