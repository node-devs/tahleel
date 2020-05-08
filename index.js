const express = require("express")
const Router = require("./routers")
const {PORT,db_url,option} = require("./config")
const mongoose = require("mongoose")
const logger = require("./middleware/logger")
const app = express()

mongoose.connect(db_url,option,function(err){
    if (err) console.error(err)
    console.log("Database connected")
    
})

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use(logger)

app.use(Router)



app.listen(PORT)
console.log("server start")

