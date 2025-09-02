import {registerUser,loginUser,logoutUser} from "../Controller/AuthController.js";
import authMiddleware from "../Middleware/auth_middleware.js";
import express  from "express";

const router = express.Router();

router.get("/",(req,res)=>{res.redirect("/register")});
router.get("/login",authMiddleware.verifyTokensForAuthRoute,(req,res)=>{res.render("registerLoginView/login/login")});
router.get("/register",authMiddleware.verifyTokensForAuthRoute,(req,res)=>{res.render("registerLoginView/register/register")});
router.get("/homePage",authMiddleware.verifyTokensForUserRoute,(req,res)=>{res.render("userView/user_registered",{userdata:req.user.userName})});

router.post("/login",loginUser);
router.post("/logout",logoutUser);
router.post("/register",registerUser);





export default router;


