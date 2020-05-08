const {Schema,model} = require("mongoose")

const bookSchema = new Schema({
    bookName : {type: String},
    authoerName : {type: String},
    publishDate : {type:Date, default:Date.now()},
    isPublished : { type:Boolean,default:true},
     
})

module.exports = model("book", bookSchema)