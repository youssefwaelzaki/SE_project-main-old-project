const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productsSchema = new Schema({
    products_id : {
        type: String,
        required: true
    },
    products_name : {
        type: String,
        required: true
    },
    products_details : {
        type: String,
        required: true
    },
    specifications: {
        type: String,
        required: true
    },
    vehicle_type : {
        type: String,
        required: true
    },
    price : {
        type: String,
        required: true
    }, 
    stock_quantity: {
        type: String,
        required: true
    },
    image_url : {
        type: String,
        required: true
    }
})

const products = mongoose.model('products', productsSchema)

module.exports = products