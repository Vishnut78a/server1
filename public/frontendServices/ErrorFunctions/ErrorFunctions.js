import display from "../ErrorFunctions/toggleMsgVsblty.js";


function displayErrorsRegistor(errElmntUsername,errElmntPassword1,errElmntPassword2,errorObj){
//extract the error msg from errObj and display them in the errElements..

errorHandler(errorObj.userName,errElmntUsername);
errorHandler(errorObj.password1,errElmntPassword1);
errorHandler(errorObj.password2,errElmntPassword2);

}

function displayErrorsLogin(errElmntUsername,errElmntPassword,errorObj){
    console.log(errElmntUsername,errElmntPassword,errorObj);
    errorHandler(errorObj.username,errElmntUsername);
    errorHandler(errorObj.password,errElmntPassword);
}

function errorHandler(error,errorElm){
    if(error){
        display.errorHtml(errorElm,error);
        display.errMsgON(errorElm);
    }
    else{display.errMsgOFF(errorElm);}
 
}

function errorMessageCleanup(arr){
    for(let errElmnt of arr){
        errElmnt.style.display = 'none';
    }
}

const displayErrors = {displayErrorsRegistor,displayErrorsLogin,errorMessageCleanup};
export default displayErrors;

//function errMsgOFF(errElement){errElement.style.display = 'none';}
//function errMsgON(errElement){errElement.style.display='block';