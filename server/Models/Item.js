const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    name: String,
    desc: String,
    price: Number
})

const ItemModel = mongoose.model("items", ItemSchema)

module.exports = ItemModel;
