const router = require("express").Router()

router.get("/book",function(req,res){
    res.send("we are on new module")
})

router.post("/newBook",function(req,res){
    res.json({
        msg:"you have add new book",
        data:req.body,
    })
})
module.exports = router