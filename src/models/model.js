const mongoose = require("mongoose")

const register = new mongoose.Schema({
    user_first_name: {
        type: String,

    },
    user_email: {
        type: String,

    },
    user_last_name: {
        type: String,

    },
    user_phone_number: {
        type: String,

    },
    user_requirements: {
        type: String,

    },

})
const registered = new mongoose.model("register", register)
module.exports = registered