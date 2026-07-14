const mongoose = require('mongoose')

//src folder is used to write the main logic of the application
//in db.js we'll be writing how server be connected to the database 

function connectToDB(){
    mongoose.connect("mongodb+srv://raishreyash1519_db_user:OLEawMnSIUZ3u69I@shreyash.p4cp1nv.mongodb.net/database")
    .then(()=>{
        console.log("Connected to DB")
    })
}

module.exports = connectToDB