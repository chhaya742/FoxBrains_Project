require("dotenv").config();
const user=require("../database/folder.db")


// create notes
createF=async (req,res) =>{
    let user_1=new user( { Name: req.body.Name,})
   
    try{
        const a =await user.insertMany(user_1)
        console.log(a);
        res.send({success:"created ",folder:a})
    }
    catch(err){
        if(res.code=11000){
            res.send("folder name is already exist")
            console.log("folder name is already exist");
    
        }
        else{
        console.log(err);
        res.send(err)}
    }
}

//get all the folders

get=async (req,res) =>{
    try{
        const a =await user.find({})
        console.log(a);
        res.send({success:"all folders",folder:a})
    }
    catch(err){
        console.log(err);
        res.send(err)}
}

// update
update=async (req,res) =>{
    let where=( { Name: req.params.Name})
    let newname=({Name:req.body.Name})
   
    try{
        const a =await user.updateOne(where,newname)
        console.log(a);
        res.send({success:"updated "})
    }
    catch(err){

        console.log(err);
        res.send(err)}
}

// delete

// update
delete1=async (req,res) =>{
    let where=( { _id:req.params._id})
    try{
        const a =await user.deleteOne(where)
        console.log(a);
        res.send({success:"deleted ",folder:a})
    }
    catch(err){
     
        console.log(err);
        res.send(err)}
    
}

//get folders by id 
getById=async (req,res) =>{
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




module.exports={createF ,get,update,delete1,getById}