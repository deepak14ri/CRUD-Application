const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./Models/User')

const app = express()
app.use(cors())
app.use(express.json())

// mongoose.connect('mongodb://127.0.0.1:27017/crud');
mongoose.connect('mongodb+srv://deepak123:deepak123@crud-app.kd7akgs.mongodb.net/crud-app?retryWrites=true&w=majority');
app.get('/', (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/create', (req, res) => {
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price
    }).then(user => res.json(user))
    .catch(err => res.json(err))
})

app.delete('/deleteuser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is Running");
})
