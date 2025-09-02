import jwt from  "jsonwebtoken";
import dotenv from "dotenv";
import authUtility from "../UtilityFolder/utility_auth_middleware.js";

dotenv.config();


function verifyTokensForUserRoute(req,res,next){
    const token = req.cookies.token;
    console.log("middleware!!userroute")
    if(!token){
        console.log(1);
        console.log("redirecting to login from middleware");
        res.redirect("/login");

    }else{
        const user = authUtility.verifyToken(token);
        if(user.success){
            req.user = user.token;
            console.log(2);
            next();
        }
        else{
            console.log(3);
            console.log("redirecting to login from middleware");
            res.redirect("/login");
        }
    }
}

function verifyTokensForAuthRoute(req,res,next){
    const token = req.cookies.token;
    if(!token){
        console.log(4);
        next();
    }else{
        const user = authUtility.verifyToken(token);
        if(user.success){
            console.log(5);
            req.user = user.token;
            console.log("redirecting to homepage from middleware");
            res.redirect("/homepage");
        }else{
            console.log(6);
            next();
        }
    }
}

const authMiddleware = {verifyTokensForAuthRoute,verifyTokensForUserRoute};
export default authMiddleware;



/*
function authenticateToken(req,res,next){
    const token = req.cookies.token;

    if(!token){next()};
    if(!token){return res.status(401).json({message:"No token found!!!"})};

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        console.log(decoded);
        req.user = decoded;
        next();
    }
    catch(e){
        res.status(403).json({message:"Invalid token!!"});
    }
}
*/
