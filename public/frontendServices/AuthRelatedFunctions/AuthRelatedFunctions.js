 function frontEndValidationRegister(username,password1,password2){
    const errors = {}
    const response = {}

    if(!username){
        errors.userName = "Username required!!";
    }

    if(!password1){
        errors.password1 = "Password required!!";
    }

    if(!password2){
        errors.password2 = "Re-enter password!!";
    }
    else{
        if(!(password1 == password2)){
            errors.password2 = "Both passwords should match !!!";
    }else{
        if(!passwordRequirementValidator(password1)){
        errors.password2 = "Passwords doesn't meet requirements";
    }
    }   
}
    
    if(!(Object.keys(errors).length === 0)){
        response.success = false;
        response.error = errors;
        
    }else{
        response.success = true;
        response.message = "Frontend Validation Cleared!!";
        response.error = errors;
    }
    console.log(response);
    return response;
    //username
    //field blank?
    //password
    //blank?
    //meet requirements?
    //both pswd matches?

}
  function frontEndValidationLogin(username,password){ 
    console.log("frontend validations!!!running");
    const errors = {}
    const response = {}
    if(!username){
        errors.username = "Username required!!";
    }

    if(!password){
        errors.password = "Password required!!";
    }

    
    if(!(Object.keys(errors).length === 0)){
        response.success = false;
        response.error = errors;
        
    }else{
        response.success = true;
        response.message = "Frontend Validation Cleared!!";
        response.error = errors;
    }
    return response;

}

function passwordRequirementValidator(password){
    
    let upperCase = false;
    let lowerCase = false;
    let number = false;
    let specialCharacter = false;
//  let passwordLenght = false;
  
    if(password.length>=8 && password.length<=16){
        // validating wheter the password contains the said characters..
        for(var i = 0 ; i<password.length;i++){
            if(!upperCase){
                upperCase = upperCaseChecker(password.charAt(i));
            }
            if(!lowerCase){
                lowerCase = lowerCaseChecker(password.charAt(i));
            }
            if(!number){
                number = numberChecker(password.charAt(i));
            }
            if(!specialCharacter){
                specialCharacter = specialCharacterChecker(password.charAt(i));
            }
                
                
            if((upperCase && lowerCase) && (number && specialCharacter)){
                break;
            }

        }
        // if the conditions meet then return true, else false;
        if((upperCase && lowerCase) && (number && specialCharacter)){
            return true;
        }else{
            return false;
        }

    }else{
        return false;
    }




    
function upperCaseChecker(password){
    if(password.charCodeAt(0)>=65 && password.charCodeAt(0)<=90){
        return true;
    }else{
        return false;
    }
   }
function lowerCaseChecker(password){
    if(password.charCodeAt(0)>=97 && password.charCodeAt(0)<=122){
        return true;
    }else{
        return false;
    }
}

function numberChecker(password){
    if(password.charCodeAt(0)>=48 && password.charCodeAt(0)<=57){
        return true;
    }else{
        return false;
    }
}

function specialCharacterChecker(password){
    if(((password.charCodeAt(0)>=33 && password.charCodeAt(0)<=47) || (password.charCodeAt(0)>=58 && password.charCodeAt(0)<=64) )   ||    ((password.charCodeAt(0)>=91 && password.charCodeAt(0)<=96)||(password.charCodeAt(0)>=123 && password.charCodeAt(0)<=126))){
        return true;
    }else{
        return false;
    }

}
}

const frontEndValidation = {frontEndValidationRegister,frontEndValidationLogin};
export default frontEndValidation;