const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shipmentsSchema = new Schema({
    shipments_shipment_id : {
        type: String,
        required: true
    },
    shipments_order_id : {
        type: String,
        required: true
    },
    shipments_shipment_date : {
        type: String,
        required: true
    },
    shipments_customer_id : {
        type: String,
        required: true
    },
    shipments_carier : {
        type: String,
        required: true
    },
    shipments_status : {
        type: String,
        required: true
    }, 
    shipments_estimated_delivery: {
        type: String,
        required: true
    },
    
})
    const shipments = mongoose.model('shipments', shipmentsSchema)

    module.exports = shipments