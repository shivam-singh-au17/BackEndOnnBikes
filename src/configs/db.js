
const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://Shivammz20:Shivam@mz20@cluster0.2ni1p.mongodb.net/OnnBikes?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
}

module.exports = connect;

