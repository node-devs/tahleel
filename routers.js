const router = require("express").Router()
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName: { type: String },
    phone: { type: Number },
    email: { type: String },
})

const userModel = mongoose.model("users", userSchema)

router.post("/addUser",function(req,res){
    const data = req.body
    new userModel(data).save()

    res.send("user add to the database")
})

router.get("/getUser",function(req,res){
    const users = userModel.find().exec()

    users.then((data) => res.json(data))
    users.catch((err) => res.send(err))
})

router.get("/getUsers/:id",function(req,res){
    const id = req.params.id
    const user = userModel.findById({ _id: id }).exec()
    user.then((data) => res.json(data))
    user.catch((err) => res.json(err))
})

router.put("/updateUser/:id",function(req,res){
    const id = req.params.id
    const data = req.body

    const user = userModel.findOneAndUpdate({ _id: id },{ $set: data})
    
    user.then(() => res.send("Operation is done successfully"))
    user.catch((err) => res.josn(err))
})

router.delete("/deleteUser/:id",function(req,res){
    const id = req.params.id

    const user = userModel.findByIdAndDelete({ _id: id})

    user.then(() => res.send("User was deleted"))
    user.catch((err) => res.json(err))
})


module.exports = router