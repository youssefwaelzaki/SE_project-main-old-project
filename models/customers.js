const mongoose = require('mongoose')
const Schema = mongoose.Schema
const customersSchema = new Schema({
    customers_id : {
        type: String,
        required: true
    },
    customers_name : {
        type: String,
        required: true
    },
    customers_phone : {
        type: String,
        required: true
    },
    customers_address : {
        type: String,
        required: true
    },
    customers_cart : {
        type: String,
        required: true
    },
    customers_email : {
        type: String,
        required: true
    }, 
    customers_created_at: {
        type: String,
        required: true
    },
    customers_updated_at: {
        type: String,
        required: true
    },
    customers_date_of_birth : {
        type: String,
        required: true
    }
})

const customers = mongoose.model('customers', customersSchema)

module.exports = customers