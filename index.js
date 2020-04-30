const express = require ("express")
const routers = require("./routers")
const mongoose = require("mongoose")
const {db_url,options} =require("./config")

const app=express()

mongoose.connect(db_url,options,function(err){
    if (err) console.error(err)

    console.log("Database connected")
})

app.use(express.json())
app.use(express.urlencoded())

app.use(routers)

app.listen(7777)
console.log("app start at port 7777")
