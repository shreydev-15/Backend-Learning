//Will be storing the data in database
// Connect the express server with the mongodb database with mongoose being the package 

const express = require('express')
const connectToDB = require('./src/db/db')

connectToDB()
const app = express()
const port = 5002

app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Server responded")
})

app.post('/notes', (req, res)=>{
    const {title, content} = req.body;
    console.log(title, content)
})

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`)
})