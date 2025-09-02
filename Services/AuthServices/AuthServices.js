import {userExists} from "../DataBaseServices/User.js";
import crud from "../DataBaseServices/crudOperations/crud.js"
import {UNAMETAKEN} from "../../UtilityFolder/Auth/AuthUtilityCode.js";
//import authUtils from "../../UtilityFolder/Auth/AuthUtilityFunctions.js"



export async function userNameValidator(username){

let response = {};
let errors = {}
    
        if(await userExists(username)){
            response.success = false;
            errors.userName = UNAMETAKEN;
         
        }else{
            response.success = true;
            response.message = "Registration Successfull !!!"
            
        }
        
        response.error = errors;
        
    console.log("here"+`${response}`);
    return response;
}
