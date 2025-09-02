//import express 
//create a port 
//create routes
//listen to that port:-
import path from "path";
import express  from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { fileURLToPath } from 'url';
import userRoutes from "./Routes/AuthRoutes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url); // Get the current file path
const __dirname = path.dirname(__filename); // Get the directory name
console.log(__dirname);
console.log(__filename);


//SERVER SETUP
app.use(express.static(path.join(__dirname,"public")));  //LOOKS FOR CSS,JS 
app.set('view engine','ejs');                              
app.set('views',path.join(__dirname,'views'));           //LOOKS FOR HTML 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use("/",userRoutes);


//DB SETUP
//const mongoAtlasURL = "mongodb+srv://vishnu:vishnu@cluster0.ryckcb3.mongodb.net/";
//const mongoLocalUrl = 'mongodb://0.0.0.0/userDB';
mongoose
.connect(process.env.MONGO_DB_ATLAS_URL)
.then(()=>{console.log("Connected to DataBase")})
.catch((err)=>{"Error Connecting to DataBase"+err});
//DB SETUP




//SERVER SETUP

//try adding mongoose dependent files outside the public folder and directly import it to server.js

//ROUTES




/*
app.get('/userPages',function(req,res){
    res.render("userPages/user_registered");
    console.log(res.body);
})
*/
/*app.post('/userPages',function(req,res){
    console.log(req.body);
    const {userName,password} = req.body;
   // crud.createUser(userName,password);
    
    res.render("userPages/user_registered");
})
*/

//DEFAULT

//DEFAULT


//ROUTES



//SERVER LIVE
app.listen(PORT,"0.0.0.0",()=>{console.log("Server Started!!");});
//SERVER LIVE