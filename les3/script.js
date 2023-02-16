//var os = require('os')

//console.log(os.platform())



// var express = require('express')
// var app = express()

// app.get("/",(req,res) =>{
//     res.send("<h1>Cool Hacker</h1>")
// })
// app.get('/names/:name',(req,res) =>{
//     let name = req.params.name
//     res.send(`Hello ${name}`)
// })
//app.get("/google/",(req,res) =>{
    //res.redirect("https://www.google.com/")
//})
// app.get('/google/:search/',(req,res) =>{
//     res.redirect(`https://google.com/search?q=${search}`)
// })
// app.get("/404", (req,res) =>{
//     res.send("404")
// })

// app.listen(3000,() =>{
//     console.log("Port: 3000")
// })

 var fs = require('fs')
// fs.appendFileSync("my.text","hello dude")


var obj = {
    name:"suren",
    age:30,
    email:"hastat@icloud.com",
}
fs.appendFileSync("my.text",JSON.stringify(obj))