const express = require('express');
const app = express() ;
const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config()               //hiding the password
app.use(express.json());  //body parser middleware to make express read JSON

// Importing routes
const postroutes = require('./routes/PostRoute')
const getroutes = require('./routes/getRoute')
const updateRoute = require('./routes/updateroute')

app.use('/api', postroutes)
app.use('/api' , getroutes)
app.use('/api' ,updateRoute )


app.listen(3000 , ()=> {
    console.log('up and running')})





mongoose.connect(process.env.DB_CONNECT).then(()=>{console.log('connected to the database')})