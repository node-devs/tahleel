const express = require ("express")
const app=express()

app.get("/data",function(req,res){
    res.send("welcome " +req.query.name+ " your age " +req.query.age)
})

//app.get("/",function(req,res){
  //  res.send("welcome "+req.query.name+" your age is "+req.query.age)
//})

app.listen(1234)
console.log("app start at port 1234")
