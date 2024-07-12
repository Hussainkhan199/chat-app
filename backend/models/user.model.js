import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlenght:6
    },
    gener:{
        type:String,
        required:true, 
        enum:["male","female"], 
    },
    profilepic:{
        type:String,
        default:""
    }
});
// ccommnet

const User = mongoose.model("User",userSchema);

export default User;