 function logger(req,res,next) {
    console.log(`${req.method} - ${req.path} come from ${req.ip}`)
}

module.exports = logger