const express=require("express")
const app=new express()

app.get("/",function(req,res){
    res.send("welcom "+req.query.name+" your age is "+req.query.age)
})

app.listen(1234)
console.log("server started")