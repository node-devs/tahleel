const express = requir ("express")
const app=express()

app.git("/face",function(erq,res){
    res.send("give your ID")
})

app.listen(7777)
console.loge("app start at port 7777")