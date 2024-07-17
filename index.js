const express = require('express');
const app = express() ;
const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config()               //hiding the password
app.use(express.json());  //body parser middleware to make express read JSON

// Importing routes
const routess = require('./CRUDroutes')


app.use('/api',routess)




app.listen(3000 , ()=> {
    console.log('up and running')})





mongoose.connect(process.env.DB_CONNECT).then(()=>{console.log('connected to the database')})