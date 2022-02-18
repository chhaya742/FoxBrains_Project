require("dotenv").config()
const mongoose=require("../config/con")
const userSchema=new mongoose.Schema({
    Title:{
        type:String,
        required: true
    } ,
    Description: {
        type:String,
        required: true
    },
    Folder_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'folder',
        required: true
    },
    is_Deleted:{
        type:Boolean,
        required: true
    }
    
})
const user=mongoose.model("notes",userSchema)
module.exports=user






