const express = require ("express")
const routers = require("./routers")
const app=express()

app.use(routers)

app.listen(7777)
console.log("app start at port 7777")
