// to create the server 

const express = require('express')
const songroutes = require('./routes/songs.routes')
const app = express()

app.use(express.json()); //When we send data in raw format
app.use('/', songroutes) //That i am using apis in songroutes

module.exports = app  