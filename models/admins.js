const mongoose = require('mongoose')
const Schema = mongoose.Schema
const adminsSchema = new Schema({
    admins_id : {
        type: String,
        required: true
    },
    admins_email : {
        type: String,
        required: true
    },
    admins_phone_number : {
        type: String,
        required: true
    },
    admins_password : {
        type: String,
        required: true
    },
    admins_name : {
        type: String,
        required: true
    },
    admins_address : {
        type: String,
        required: true
    }, 
    admins_modifying_attributes : {
        type: String,
        required: true
    },
    admins_role : {
        type: String,
        required: true
    },
    admins_created_at: {
        type: String,
        required: true
    },
    admins_updated_at: {
        type: String,
        required: true
    },
    admins_image_url : {
        type: String,
        required: true
    }
})

const admins = mongoose.model('admins', adminsSchema)

module.exports = admins