//import registerServices from "../Services/AuthServices/AuthServices.js"
import userModel from "../Services/DataBaseServices/crudOperations/crud.js"
import authUtility from "../UtilityFolder/utility_auth_middleware.js"


export async function registerUser(req,res){

    const {userName,passWord} = req.body;
    let response = {};
    let errors = {};
    let result;
    let token; 

    const userExists = await userModel.userExists(userName);

    if(!userExists){
        result = await userModel.createUser(userName,passWord);
        
        if(result){
        response.success = true;
        response.message = "User Registration Successfull !!!";
        response.error = errors;
        
        token = authUtility.signToken(result);
        res.cookie("token",token,{httpOnly:true,sameSite:"strict"});

    }else{
        
        console.log(result.error);
        response.error = "Server Error r.r.r.r.";
    }
}
    else{
        response.success = false;
        errors.userName = "User already exists!";
        response.error = errors;
       
    }
    
    return res.json(response);

}


export async function loginUser(req,res){
    console.log("login entered");
    const {userName,passWord} = req.body;    
    let response = {};
    let errors = {};
    let token;

    /*check for token 
    if valid 
    then redirect to /homepage
    if not ask to login
    */
    const userExists = await userModel.userExists(userName);
   
    if(!userExists){
        response.success= false;
        errors.userName = "User doesn't exists!";
        response.error = errors;
    }
    else{
    const document = await userModel.findUserByName(userName);
    const result = document;
    console.log("result:--", result);
    const registeredPassword = document.password;

    if(registeredPassword == passWord){
        //authentication successfull
        response.success = true;
        response.message = "User Login Successfull!!"
        response.error = errors;

        token = authUtility.signToken(result);
        res.cookie("token",token,{httpOnly:true,sameSite:"strict"});
    }
    else{
        response.success = false;
        errors.password = "User Password Does't Match";
        response.error = errors;
    }
        
    }
    console.log("login exit");
    return res.json(response);
    
    
}

export function logoutUser(req,res){
    
   return res.clearCookie("token").json({success: true, message:"logged out successfully!!"});
}


