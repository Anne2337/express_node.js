const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
            name: {
                type:String,
                required: [true , "please enter product name"],
            },

            quantity: {
                type :Number,
                required: true
            },

            price :{
                type:Number,
                requred : true,
                default: 0
            },

            image: {
                type:String,
                required: false,
            },

    },
    {
        timestamps: true
    }

);

const products = mongoose.model("product", productSchema)

module.exports = products;