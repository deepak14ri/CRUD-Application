const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    desc: String,
    price: Number
})

const UserModel = mongoose.model("items", UserSchema)

module.exports = UserModel;
