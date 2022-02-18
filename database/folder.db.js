require("dotenv").config()
const mongoose=require("../config/con")
const userSchema=new mongoose.Schema({
    Name:{
                type:String,
                required: true,
                unique:true
            }
})
const user=mongoose.model("folder",userSchema)
module.exports=user

