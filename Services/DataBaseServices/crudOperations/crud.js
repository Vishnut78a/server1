import userModel  from '../../../Model/UserModel.js';


//CREATE
async function createUser(name,pswd){

try{
   const i =  await userModel.create({userName:name,password:pswd});
   console.log(i);
   return true;
}
catch(e){
   console.log(e)
   return false;
}
   
   
}
//READ
async function findUserByName(name){

   const i = await userModel.findOne({userName: {$eq:name}}).lean();
   console.log(i);

   if(i){
      return i;
   }
   else{
      return i;
   }
   
}
//UPDATE
function updateUserPassword(){}
//DELETE
function deleteUser(){}
//EXISTS
async function userExists(username){
   console.log("username:",username);
   const exists =  await userModel.exists({userName:username.toLowerCase().trim()});
   
   console.log(exists);
   
   if(exists){
      console.log("exists");
      return true;
   }else{
      console.log("doesn't exists");
      return false;
   }
   
   
}

/*
userModel.create();
userModel.find();
userModel.updateMany();
userModel.deleteOne();
*/

const crud = {createUser,findUserByName,userExists}
export default crud;