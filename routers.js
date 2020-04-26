const router = require("express").Router()

router.use(function(req,res,next){
    console.log(req.ip)
    console.log(req.headers)
    console.log(req.params)
    console.log(req.hostname)
    console.log(req.query)
    console.log(req.protocal)
    next()
})

module.exports = router