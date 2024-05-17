const mongoose = require('mongoose')
const Schema = mongoose.Schema
const vehiclesSchema = new Schema({
    vehicles_coupe_suv_sedan : {
        type: String,
        required: true
    },
    vehicles_model_name : {
        type: String,
        required: true
    },
    vehicles_price : {
        type: String,
        required: true
    },
    vehicles_description : {
        type: String,
        required: true
    },
   
    
})
    const vehicles = mongoose.model('vehicles', vehiclesSchema)

    module.exports = vehicles