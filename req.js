const express=require("express")
const app=new express()

app.get("/:name/:age",function(req,res){
    res.send("welcom "+req.params.name+" your age "+req.params.age)
})

app.listen(1234)
console.log("server start")