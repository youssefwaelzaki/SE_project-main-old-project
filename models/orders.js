const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ordersSchema = new Schema({
    orders_id : {
        type: String,
        required: true
    },
    orders_customers_id : {
        type: String,
        required: true
    },
    orders_order_date : {
        type: String,
        required: true
    },
    orders_order_details : {
        type: String,
        required: true
    },
    orders_comments : {
        type: String,
        required: true
    },
    orders_total_amount : {
        type: String,
        required: true
    }, 
    orders_status: {
        type: String,
        required: true
    },
    orders_payment_method: {
        type: String,
        required: true
    },
    orders_trakcing_number : {
        type: String,
        required: true
    },
    orders_delivery_method : {
        type: String,
        required: true
    },
    orders_delivery_address : {
        type: String,
        required: true
    }
})

const orders = mongoose.model('orders', ordersSchema)

module.exports = orders