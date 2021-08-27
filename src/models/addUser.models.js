const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            require: true
        },
        last_name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        mobile: {
            type: Number,
            require: true
        },
        password: {
            type: String,
            require: true
        }

    }, {
        versionKey:false
    }
)
const User = mongoose.model("user", userSchema);
module.exports = User;