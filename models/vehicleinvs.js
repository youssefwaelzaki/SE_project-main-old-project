const mongoose = require('mongoose')
const Schema = mongoose.Schema
const vehicleinvsSchema = new Schema({
    vehicleinvs_inventory_id : {
        type: String,
        required: true
    },
    vehicleinvs_product_id : {
        type: String,
        required: true
    },
    vehicleinvs_quantity : {
        type: String,
        required: true
    },
    vehicleinvs_warehouse_location : {
        type: String,
        required: true
    },
    vehicleinvs_amount : {
        type: String,
        required: true
    },
    vehicleinvs_transaction_id : {
        type: String,
        required: true
    },
    vehicleinvs_status : {
        type: String,
        required: true
    },
   
    
})
    const vehicleinvs = mongoose.model('vehicleinvs', vehicleinvsSchema)

    module.exports = vehicleinvs