const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String, // 1 -Admin, 2- HR, 3- Employee
    },
    jobrole: {
        type: String,
    },
    status: {
        type: Boolean
    },
    loginAttempts: {
        type: Number,
    },
    lastloggedDate: {
        type: String
    }
})


module.exports = mongoose.model('employees', empSchema)




