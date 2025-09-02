import userModel from "../../Model/UserModel.js";
//REDUNTANT:

//check if userName exists
export async function userExists(userName){
    const userExists = await userModel.exists(userName);
    return userExists;
}
//check if password matches
export async function passwordVerify(userName,pswd){
    const pswdMatches = await userModel.findById(userName);
    return pswdMatches;
}
//create a user
export async function createUser(userName,pswd){
    const user = await userModel.create({});
    return user;
}
//update a user
export function updateUser(userName,pswd){}
//delete a user
export function deleteUser(userName){}