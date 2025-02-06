const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.listen(3000, () =>{
    console.log('port is running on port 3000')
})

app.get('/' , (req,res) =>{
    res.send('hello')
})

mongoose.connect("mongodb+srv://atuyishime28:S6mpcfawe12@cluster0.4k0db.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

.then(() =>{
    console.log('connected to the database')
})

.catch(() =>{
    console.log('not connected to the database')
})