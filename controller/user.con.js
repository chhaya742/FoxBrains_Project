require("dotenv").config();
const user=require("../database/user.db")
const bcrypt=require("bcrypt")
saltRounds=10;
const {sign } = require("jsonwebtoken");


// registration
register=async (req,res) =>{
        if ( !req.body.firstname|| !req.body.lastname|| !req.body.email|| !req.body.password){
          res.send({
            "success": false,
            "status": 400,
            "message": "Got error while saving",
            })
            console.log({
              "success": false,
              "status": 400,
              "message": "Got error while saving",
              });
            return""
        }
    const salt = bcrypt.genSaltSync(saltRounds);
    let user_1=new user( {firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email,password:bcrypt.hashSync(req.body.password,salt)})
   
    try{
        const a =await user.insertMany(user_1)
        res.send({success:"register ",user:a})
    }
    catch(err){
        if(res.code=11000){
            res.send("email already exist")
            console.log("email already exist");

        }
        else{
        console.log(err);
        res.send(err)
  }
    }
}


// user login
login=async (req,res) =>{
    if ( !req.body.email|| !req.body.password){
      res.send({
        "success": false,
        "status": 400,
        "message": "Got error while saving",
        })
        console.log({
          "success": false,
          "status": 400,
          "message": "Got error while saving",
          });
        return""
    }
try{
    const a =await user.find({ email:req.body.email})
    
    if(bcrypt.compareSync(req.body.password,a[0].password)){
        // res.send({success:"login ",user:a})
        const token=sign({id:a[0]._id},"chhayabagwan",{ expiresIn:"6h"})
        // console.log(token);
        res.cookie("user",token)
            res.json({"success": true,
            "status": 200,
            "message": "Login successfull.",
            "token": token,
          })
          console.log({message:a});
        }
        else{
          res.json({message:"password is wrong"})
        }
}
catch(err){
    if(res.code=11000){
        res.send("email not  exist")
        console.log("email not exist");

    }
    else{
    console.log(err);
    res.send(err)}
}
}

module.exports={register,login}