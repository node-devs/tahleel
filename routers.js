const router = require("express").Router()
const controllers = require("./controllers/books")

router.post("/book/addBook",controllers.addbook)
router.get("/book/getAll",controllers.getbooks)
router.get("/book/getBook/:id",controllers.getbook)
router.put("/book/upDate/:id",controllers.updatebook)
router.delete("/book/delete/:id",controllers.deletebook)

module.exports = router 



