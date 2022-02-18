require("dotenv").config()
const mongoose=require("../config/con")
const userSchema=new mongoose.Schema({
    Note_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'notes',
        required: true
        }
    
})
const trash=mongoose.model("trash ",userSchema)
module.exports=trash






