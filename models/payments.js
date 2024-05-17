const mongoose = require('mongoose')
const Schema = mongoose.Schema
const paymentsSchema = new Schema({
    payments_payment_id : {
        type: String,
        required: true
    },
    payments_payment_date : {
        type: String,
        required: true
    },
    payments_payment_method : {
        type: String,
        required: true
    },
    payments_order_id : {
        type: String,
        required: true
    },
    payments_amount : {
        type: String,
        required: true
    },
    payments_transaction_id : {
        type: String,
        required: true
    }, 
    payments_status: {
        type: String,
        required: true
    },
    
})
    const payments = mongoose.model('payments', paymentsSchema)

    module.exports = payments