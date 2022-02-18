const  Mongoose  = require("mongoose")
require("dotenv").config()
Mongoose.connect(process.env.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  },(err)=>{
    if(err) throw err;
    console.log("connect");
  }
);
module.exports=Mongoose

