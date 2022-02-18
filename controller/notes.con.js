require("dotenv").config();
const user = require("../database/notes.db")
const trash=require("../database/trash")
const jwt = require("jsonwebtoken")



// create notes
createNote = async (req, res) => {
    let user_1 = new user({ Title: req.body.Title, Description: req.body.Description, Folder_id: req.body.Folder_id, is_Deleted: req.body.is_Deleted })

    try {
        const a = await user.insertMany(user_1)
        console.log(a);
        res.send({ success: "created ", user: a })
    }
    catch (err) {
        console.log(err);
        res.send(err)
    }
}

// update
updateNote = async (req, res) => {
    let where = ({ Ttile: req.params.Title })
    let newname = ({ Title: req.body.Title, Description:req.body.Description })

    try {
        const a = await user.updateMany(where, newname)
        console.log(a);
        res.send({ success: "updated "})
    }
    catch (err) {

        console.log(err);
        res.send(err)
    }
}

//get all the folders
getAllNote = async (req, res) => {
   
    try {
        const tokendata=req.cookies
        console.log(tokendata.id);
        user.find({}).populate("Folder_id").exec((err,user)=>{
            console.log(user);
            res.send(user)
        })
    }
    catch(err){
        console.log(err);
        res.send(err)
    }}



//get folders by id 


getNoteById= async(req,res) =>{
    try{
        // console.log(req.params._id);
        let where=( { _id:req.params._id})
        const a =await user.findOne(where)
        console.log(a);
        res.send({user:a})
    }
    catch(err){
        console.log(err);
        res.send(err)}
}



// 



module.exports = { createNote, updateNote, getAllNote,getNoteById}



