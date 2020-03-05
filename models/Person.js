const mongoose = require("mongoose")
const Schema = mongoose.Schema


const PersonSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        present_address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    postal_code: {
        type: String,
        required: true
    },
    country: {
        type: String,
        require: true
    }

})


const Person = mongoose.model("person", PersonSchema)

module.exports = Person