//IMPORTS:-
import  routes from "../frontendServices/routes/routes.js";
import  paths from "../frontendServices/paths/paths.js";
//import validator from  "../../Services/validation/userRegValidation/userRegValidation.js";
import pswVisibility from "../frontendServices/passwordVisibility/pswdVisibiliy.js";
import frontEndValidation from "../frontendServices/AuthRelatedFunctions/AuthRelatedFunctions.js";
import displayErrors from "../frontendServices/ErrorFunctions/ErrorFunctions.js";
import display from "../frontendServices/ErrorFunctions/toggleMsgVsblty.js";
//REFERENCES:-
var form = document.getElementById('form');
var login = document.getElementById('login');
var username = document.getElementById('userName');
var password = document.getElementById('password');
var passwordConfirm = document.getElementById('passwordConfirm');
var submit1 = document.getElementById('submit-parent');
var togglePassword = document.getElementById('showPassword');
var togglePasswordConfirm = document.getElementById('showPasswordConfirm');
var toggleErrorMessage = document.getElementById('error-message');
var successMessage = document.getElementById('success-message');
var usernameError = document.getElementById('userName-error');
var passwordError = document.getElementById('password-error');
   

//PAGE EVENTS:-
submit1.addEventListener("click",async function(){

const userName = username.value;
const passWord = password.value;
const passWordConfirm = passwordConfirm.value;

/*
api call karo 
json response ayega agar status success true hai toh alert msg show karo
else agar error hai toh ek function banao joh respective fields ke sare error ko dikhaye.

idhr sirf fields required , pswd doesn't match aur doesn't meet requirements 
wala validation perform karwana hai..
aur backend mein username valid hai ki nhi wala..
*/
//frontend validation
const responseFEV = frontEndValidation.frontEndValidationRegister(userName,passWord,passWordConfirm);

if(responseFEV.success){

//backend validation& creation
const responseBEV = await fetch("http://localhost:8080/register",{
    method: "POST",
    headers:{
        "Content-type": "application/json"
    },
    body: JSON.stringify({userName,passWord})
   });

const result = await responseBEV.json();

if(!result.success){

    displayErrors.displayErrorsRegistor(usernameError,passwordError,toggleErrorMessage,result.error); 

}else{
    console.log(result);
    displayErrors.errorMessageCleanup([usernameError,passwordError,toggleErrorMessage]);
    //display.errMsgOFF(usernameError);
    //setTimeout(()=>{alert(result.message);},50);
    window.location.href = "/homepage";


}
}    
else{

    displayErrors.displayErrorsRegistor(usernameError,passwordError,toggleErrorMessage,responseFEV.error);

}
/*
await validator.userNameValidator(username,usernameError,successMessage);
validator.password1Validator(password,passwordError,successMessage);
validator.passwordConfirmValidator(username,password,passwordConfirm,successMessage,toggleErrorMessage,form);
*/
   
});


togglePassword.addEventListener("click",function(){
    pswVisibility.togglePswdVisibility(password,togglePassword);
    
});

togglePasswordConfirm.addEventListener("click",function(){
    pswVisibility.togglePswdVisibility(passwordConfirm,togglePasswordConfirm);
});


login.addEventListener("click",function(){
    routes.routesFunction(paths.loginPage);
});




 /*
    if(username.value && (password.value ))
    if(password.value === passwordConfirm.value ){
     
        console.log(password.value);
        console.log(passwordConfirm.value);
        if(passwordValidator(passwordConfirm.value)){
            console.log("SUCCESSFULLY CREATED");
            toggleErrorMessage.innerText = 'Succesfully Registered!'
            toggleErrorMessage.style.color = '#00c49a';
        }else{
            toggleErrorMessage.style.color = 'red';
            toggleErrorMessage.innerHTML = 'Password must be at least <br>- 8-16 characters long and must contain  &nbsp;&nbsp;of <br> - an UpperCase, <br> - a LowerCase, <br> - a number and <br> - a special character' ;
           
            toggleErrorMessage.style.display = 'block';
            console.log("REQUIREMENTS DOESN'T MATCH");
        }
        
    }else{
        console.log("FAILED");
        console.log(password.value);
        console.log(passwordConfirm.value);
        toggleErrorMessage.style.color = 'red';
        toggleErrorMessage.innerHTML = 'Password must be at least <br>- 8-16 characters long and must contain  &nbsp;&nbsp;of <br> - an UpperCase, <br> - a LowerCase, <br> - a number and <br> - a special character' ;
        toggleErrorMessage.style.display = 'block';
    }
    */