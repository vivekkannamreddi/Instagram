// import express from 'express'
// import path from 'path'

const express = require('express');
const path = require('path');

const app = express();
const port  = 3000;


app.use(express.static('public'))

app.set('view engine','ejs');
app.set("views",path.join(__dirname,'/views'));

app.get('/ig/:username',(req,res)=>{
    const instaData = require('./data.json');
    let {username} = req.params;
    let data = instaData[username]
    if(data){
        res.render("instagram.ejs",{username,data})
    }
    else{
        res.render("error.ejs")
    }
})

app.get('/',(req,res)=>{
    res.send("use url {/ig/username} to render the page!");
})

app.listen(port,()=>{
    console.log(`server listening at port ${port}...`);
})