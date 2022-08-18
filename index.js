// const express = require("express");

 //import { application } from "express";

let app = express();

app.get("/",function(req,res){
    res.send("Hi Nithis !!!");
});



app.listen(4000, function(){
    console.log("Server started");
});

// application.get('/',function(req, res){                              
//     res.send('Get request to homepage')
// })
// console.log("request sent")

