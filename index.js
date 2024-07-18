const express = require('express');
const app = express() ;
const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config()               //hiding the password
app.use(express.json());  //body parser middleware to make express read JSON
app.use(express.urlencoded({extendeded : false})) ; //body parser middleware to make express read form url 

// Importing routes
const postroutes = require('./routes/PostRoute')
const getroutes = require('./routes/getRoute')
const updateRoute = require('./routes/updateroute')
const deleteRoute = require('./routes/deleteRoute')

app.use('/api', postroutes)
app.use('/api' , getroutes)
app.use('/api' ,updateRoute )
app.use('/api' ,deleteRoute )


app.listen(3000 , ()=> {
    console.log('up and running')})





mongoose.connect(process.env.DB_CONNECT).then(()=>{console.log('connected to the database')})