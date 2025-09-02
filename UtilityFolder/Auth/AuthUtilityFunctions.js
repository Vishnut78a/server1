export function passwordRequirementValidator(password){
    
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