const express = require ("express")
const app=express()

app.get("/face",function(req,res){
    res.send("give your ID")
})

app.listen(7777)
console.log("app start at port 7777")
