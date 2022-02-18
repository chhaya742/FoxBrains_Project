const express=require("express");
const router = require("./route/routes");
const cookieParser=require("cookie-parser")
var multer = require('multer');
var upload = multer();
const app=express();

app.use(upload.array()); 
app.use(express.json());
app.use(cookieParser());


app.use("/",router)

app.listen(process.env.port,()=>{
    console.log(`server is running on 3100 ${process.env.port}`);
})