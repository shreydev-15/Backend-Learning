// Library is a collection of pre written code that can be used to perform specific task eg axios

//Framework is a collection of pre written code that provides the whole structure for developing software applications eg express

// Express is used for server side programming in recieving the request and sending out the response. It also parse the requests. Finally to match response with the routes.....Usually installed via npm


import express from 'express'

const app = express()
// console.dir(app)

// Ports are the logical endpoints of a network connection that is used to exchange information between web server and web client 

const port = 3000;
app.listen(port, ()=>{        //Starts the server 
    console.log(`App is listening on ${port}`)
})

// app.use((req, res)=>{        // Used to recieve requests from postman or client  
//     // console.log(req)
//     console.log("Request Recieved")

//     //In form of Object 
//     // res.send({
//     //     name : 'Shreyash',
//     //     roll:35,
//     //     College: 'GL Bajaj'
//     // })

//     //In form of HTML
//     let code = "<h1>Shreyash List</h1> <ul><li>Frontend</li><li>Frontend</li><li>Backend</li><li>Database</li><li>Authentication</li></ul>"
//     res.send(code)
// })


//For one path we can provide only one response 

//app.get()
app.get("/", (req, res)=>{
    res.send("You contacted the root path by get method")
})
app.get("/home", (req, res)=>{
    res.send("You contacted the home path")
})
app.get("/sections", (req, res)=>{
    res.send("You contacted the sections path")
})
app.get("/help", (req, res)=>{
    res.send("You contacted the help path")
})
// app.get(/.*/, (req, res)=>{
//     res.send("You contacted the wrong path")
// })

//app.post
app.post("/", (req, res)=>{
    res.send("You contacted the root path by post method")
})

// app.use((req, res)=>{
//     res.status(200).send("You contacted the incorrect path")
// })

//http is text based but so it could be understand by all servers...express parse the text based into object based so that js can understand

//Nodemon is the package we use for restarting our server easily instead of doing it manually

//Path parameters are treated as variables as we can't really deifine each and every routes for usernames and IDs like instagram does 

app.get("/:username/:id", (req, res)=>{
    let {username, id} = req.params;
    // let msg = `Welcome on board user @${username} with id ${id}`
    let reshtml = `<h1>Welcome on board user @${username} with id ${id}</h1>`
    res.send(reshtml)
})


//Query Strings 
app.get("/search", (req, res)=>{
    // console.log(req.query)
    let {q} = req.query
    if(!q){
        res.send("Invalid Request")
    }
    // res.send(`Search results for : ${q}`)
    res.send(`<h1>Search results for : ${q}</h1>`)
})