//Will be storing the data in database
// Connect the express server with the mongodb database with mongoose being the package 

const express = require('express')
const connectToDB = require('./src/db/db')
const noteModel = require('./src/models/notes.model')

connectToDB()
const app = express()
const port = 5002

app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Server responded")
})

app.post('/notes', async (req, res)=>{
    const {title, content} = req.body;
    await noteModel.create({
        title,content
    })
    res.send({
        message: "Note created succussfully"
    })
})

app.get('/notes', async(req, res)=>{
    const notes = await noteModel.find()
    res.json({
        message: "Notes fetched succussfully",
        notes
    })
})

app.delete('/notes/:id', async(req, res)=>{
    const noteID = req.params.id
    await noteModel.findOneAndDelete({
        _id : noteID
    })

    res.json({
        message: "Note deleted succussfully"
    })
})

app.patch('/notes/:id', async (req, res)=>{
    const noteId = req.params.id
    const {title, content}  = req.body

    await noteModel.findByIdAndUpdate({
        _id : noteId
    },{
        title:title,
        content : content 
    })

    res.json({
        message: "Notes updated succussfully"
    })
})

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`)
})