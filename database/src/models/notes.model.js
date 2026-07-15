//The structure by which we are storing the data...is known as schema. We always put this under model folder of src

//A blueprint of how data should look like in the database collection

//Model makes it easy to perform operations (create, read, update, delete) on the corresponding collection [similar type of data group]

const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title : String,
    content : String
})

const noteModel = mongoose.model("note", noteSchema)
module.exports = noteModel