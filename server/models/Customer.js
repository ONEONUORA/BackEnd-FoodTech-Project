const mongoose = require("mongoose")

const CustomerSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const CustomerModel = mongoose.model("customers", CustomerSchema)
modules.exports = CustomerModel