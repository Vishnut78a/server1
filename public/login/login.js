//IMPORTS:-
import routes from "../frontendServices/routes/routes.js";
import paths from "../frontendServices/paths/paths.js";
import pswVisibility from "../frontendServices/passwordVisibility/pswdVisibiliy.js";
import frontEndValidation from "../frontendServices/AuthRelatedFunctions/AuthRelatedFunctions.js";
import displayError from "../frontendServices/ErrorFunctions/ErrorFunctions.js";
import displayErrors from "../frontendServices/ErrorFunctions/ErrorFunctions.js";

//REFERENCE:-
var signUpBtn = document.getElementById("signUp");
var username = document.getElementById("userName");
var password = document.getElementById("passWord");
var showPasswordBtn = document.getElementById("showPassword");
var loginBTN = document.getElementById("loginBTN");
var usernameError = document.getElementById("username-error");
var passwordError = document.getElementById("password-error");
//LISTENERES:-

loginBTN.addEventListener("click",async function(){
    console.log("login clicked");
    console.log(1)
    const userName = username.value;
    const passWord = password.value;
    //frontend validation!!
    /*
    username and passwords are provided or not?
    */

   var responseFEV = frontEndValidation.frontEndValidationLogin(userName,passWord);
   if(responseFEV.success){
    displayError.errorMessageCleanup([usernameError,passwordError]);
    console.log("hiiiieieieieiei")
    //backend authorization!
    /*
    checks whether the given username exists or not  
    if it exists then does the password provided with it matches or not?
    *///192.168.0.105:8080 for mobile
    //local: http://localhost:8080
    //render: https://server1-1-0gsu.onrender.com
   const responseBEV = await fetch("https://server1-1-0gsu.onrender.com/login",{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body: JSON.stringify({userName,passWord})
   });

   const result = await responseBEV.json();
   console.log(result);
   if(!result.success){

    alert("Incorrect Username/Password");
   }else{
    console.log(result);
    //login successfull navigate to user page!!
    console.log("redirecting to homepage from login.js")
    window.location.href = "/homepage";
   }

   }else{displayError.displayErrorsLogin(usernameError,passwordError,responseFEV.error);}
    
});


signUpBtn.addEventListener("click",function(){
    routes.routesFunction(paths.signUpPage);
});


showPasswordBtn.addEventListener('click',function(){
    pswVisibility.togglePswdVisibility(password,showPasswordBtn);
});


