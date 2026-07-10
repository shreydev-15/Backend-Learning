//Process is a global object in node js which gives us information about the current process. It is an instance of EventEmitter class. It can be accessed from anywhere in the application without requiring any import.


//console.log(process.argv)


// for(let i = 2; i<process.argv.length; i++){
//     console.log(`Argument ${i-1}; ${process.argv[i]}`)

// }

// Module exports is a special object which is included in every JS file in the Node.js application by default. It is used to export functions, objects, or primitive values from a given file so they can be used in other files with the help of require function.

//require is a built-in function to include modules that exist in separate files. It reads a JavaScript file, executes the file, and then proceeds to return the exports object.

const mathfunc = require("./math")

console.log(mathfunc.add(2,3))
console.log(mathfunc.sub(2,3))
console.log(mathfunc.mul(2,3))

const info = require("./fruits")
console.log(info)

//npm 
// Node package manager is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website.

// npm is basically a library of packages and packages are a collection of codes that are made by someone else. express and react are also the packages that we'll be using in the future. It is also a command line tool

// node modules 
// The node_module folder contains every installed dependencies for our project

//package-lock.json it records the exact version of every installed dependency including its sub dependencies and their versions 