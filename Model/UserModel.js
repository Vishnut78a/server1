import mongooose from 'mongoose';

const userSchema = 
new mongooose.Schema(
    {
        userName:{type: String,lowercase: true,trim:true},
        password:{type: String,trim:true}
    }
);

const userModel = mongooose.model("user",userSchema);

export default userModel;