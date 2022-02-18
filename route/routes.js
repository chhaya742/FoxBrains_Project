const express=require("express");
const { createF, get, update, delete1, getById } = require("../controller/folder.con");
const {  createNote, getAllNote, updateNote, getNoteById} = require("../controller/notes.con");
const { getAllNoteFromNote ,moveTo, deleteFromtrash} = require("../controller/trash.con");
const { register, login } = require("../controller/user.con");
const router=express.Router();
const {authentication}=require("./auth")

// For users
router.post("/register",register)
router.post("/login",login)

// For folder
router.post("/folder",authentication,createF)
router.get("/getFolders",authentication,get)
router.put("/update/:Name",authentication,update)
router.delete("/delete/:_id",authentication,delete1)
router.get("/getById/:_id",authentication,getById)



// for notes
router.post("/create",authentication,createNote)
router.get("/getNote",authentication,getAllNote)
router.put("/updateNote/:Name",authentication,updateNote)
router.get("/getByid/:_id",authentication,getNoteById)

// for trash

router.post("/moveTo/:_id",authentication,moveTo)
router.get("/getAll",authentication,getAllNoteFromNote)
router.delete("/deleteAll",authentication,deleteFromtrash)







module.exports=router