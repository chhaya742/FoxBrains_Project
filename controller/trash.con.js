require("dotenv").config();
const user = require("../database/notes.db");
const trash=require("../database/trash")


// move to trash
moveTo=async (req,res) =>{
    let where=( { Note_id:req.params._id})
    try{
        const c=await user.findOne(where)
        const a =await trash.insertMany(where)
        const b=await user.deleteOne(where)
        if(c==null){
            console.log("this note is not exist");
                res.send("this note is not exist")
        
        }
        else{
            res.send({success:"move to trash "}) 
            
        }

    }
    catch(err){
     
        console.log(err);
        res.send(err)}
    
}

// Get All Trash Notes 
getAllNoteFromNote = async (req, res) => {
   
    try {
        trash.find({}).populate("Note_id").exec((err,trash)=>{
            console.log(trash);
            res.send(trash)
        })
    }
    catch(er){
        console.log(err);
        res.send(err)
    }
}


// update
deleteFromtrash=async (req,res) =>{
    try{
        const a =await trash.deleteMany()
        console.log(a);
        res.send({success:"deleted ",user:a})
    }
    catch(err){
     
        console.log(err);
        res.send(err)}
    
}
module.exports={moveTo,getAllNoteFromNote,deleteFromtrash}