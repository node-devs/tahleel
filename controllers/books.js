const bookModel = require("../database/book_model")

 class bookcontroller {
     addbook(req,res){
         const book = new bookModel(req.body).save()
         book.then((data) => res.json({msg: "book added"},data))
         book.catch((err) => res.json(err))
     }
     getbooks(req,res){
         const books = bookModel.find().exec()
         books.then((data) => res.json(data))
         books.catch((err) => res.json(err))
     }
     getbook(req,res){
         const id = req.params.id
         const book = bookModel.findOne({ _id: id}).exec()
         book.then((data) => res.json(data))
         book.catch((err) => res,json(err))
     }
     updatebook(req,res){
         const id = req.params.id
         const upDate = bookModel.findOneAndUpdate({ _id: id},{ $set:data}).exec()
         upDate.then(() => res.send("update book"))
         upDate.catch((err) => res.json(err))
     }
     deletebook(req,res){
         const id = req.params.id
         const Delete = bookModel.findOneAndRemove({ _id: id}).exec()
         Delete.then(() => res.send("book was deleted"))
         Delete.catch((err) => res.json(err))
     }
 }

 module.exports = new bookcontroller()
