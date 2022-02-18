require("dotenv").config()
const mongoose=require("../config/con")
const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required: true
    } ,
    lastname: {
        type:String,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required: true
    },
    password:{
        type:String,
        required: true,
        minlength:8
    }
})
const user=mongoose.model("users",userSchema)
module.exports=user



