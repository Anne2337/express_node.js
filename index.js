const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const app = express()


app.use(express.json());


app.get('/' , (req,res) =>{
    res.send('hello')
})

app.post('/Api/product',  async (req,res) =>{
    try{
        const product =  await Product.create(req.body)

        res.status(200).json(product)
    }catch(error){
        res.status(404).send({message: error.message})
    }
})

mongoose.connect("mongodb+srv://atuyishime28:S6mpcfawe12@cluster0.4k0db.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

.then(() =>{
    
    console.log('connected to the database')

    app.listen(3000, () =>{
        console.log('port is running on port 3000') })
})

.catch(() =>{
    console.log('not connected to the database')
})