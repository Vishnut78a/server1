import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function verifyToken(token){
    let response = {};
    try {
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET_KEY);
        console.log("decodedToken:",decodedToken);
        response.success = true;
        response.token = decodedToken;
        return response;
    }catch(e){
        console.log("erorr",e);
        response.success = false;
        response.message = "Invalid Token!!!";
        return response;
    }
    

}

function signToken(payload){
   const token =  jwt.sign(payload,process.env.JWT_SECRET_KEY);
   return token;
}

const authUtility = {verifyToken,signToken}
export default authUtility;