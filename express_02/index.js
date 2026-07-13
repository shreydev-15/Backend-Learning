//REST (Representational state transfer) is a type of API that follows specific rules and guidlines for communication. It uses HTTP modules (GET, POST, PUT, DELETE) for communication. It defines fixed standards on how requests and responses should be structured

//GET - To get data from the server
//POST - To send new data to the server
//PATCH - To update data on the server
//DELETE - To remove data from the server 


//Mini mini project

const express = require('express')
const app = express()

const port = 3002;

app.use(express.json()) //As used as middleare when req.body is used so that server can read from req.body

//req.body is used with push, patch, put
//":" tells the thing after this is dynamic and can take several values 

let notes =[]

app.post('/notes', (req, res)=>{
    notes.push(req.body)
    res.json({
        message: "Notes added succussfully",
    })

})

app.get('/notes', (req, res)=>{
    res.json(notes)
})

app.delete('/notes/:index', (req, res)=>{ //no ":" in frontend url link
    const index = req.params.index
    delete notes [index]
    res.json({
        message : `Notes at index ${index} deleted succussfully`
    })
})


app.patch('/notes/:index', (req, res)=>{
    const index = req.params.index
    const{title, description} = req.body
    notes[index].title = title
    notes[index].description = description
    res.json({
        message : `The title and description of notes ${index} updated succussfully`
    })

})

app.listen(port, ()=>{
    console.log("App is listening on port", port)
})

//We need to store these notes in the database as once server restarted all the notes will be gone 