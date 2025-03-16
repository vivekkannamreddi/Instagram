// import express from 'express'
// import path from 'path'

const express = require('express');
const path = require('path');

const app = express();
const port  = 3000;

app.set('view engine','ejs');
app.set("views",path.join(__dirname,'/views'));

app.get('/ig/:username',(req,res)=>{
    let {username}= req.params;
    res.render("instagram.ejs",{username})
})

app.get('/',(req,res)=>{
    res.send("use url {/ig/username} to render the page!");
})

app.listen(port,()=>{
    console.log(`server listening at port ${port}...`);
})