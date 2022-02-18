const {verify } = require("jsonwebtoken");

authentication=(req,res,next)=>{
    token=req.cookies;
    // console.log(token);
    if (token.user==undefined){
        res.send({succses:0,
        message:"authentication erroe"})
    }else{
    verify(token.user,"chhayabagwan",(err,tokendata)=>{
        if(err){
            res.send({message:"authentication  error"});

        }
        else if(tokendata.id==undefined){
            res.send({message:"authentication error"})
        }
        else{
            res.tokendata=tokendata
            next()
        }

    })
}
}

module.exports={authentication}
