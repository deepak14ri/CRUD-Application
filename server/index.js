const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./Models/User')

const app = express()
app.use(cors(
    {
        origin: ["https://crud-client-navy.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json())

mongoose.connect('mongodb+srv://deepak123:deepak123@crud-app.kd7akgs.mongodb.net/test?retryWrites=true&w=majority');
app.get('/', (req, res) => {
    UserModel.find()
    .then(items => res.json(items))
    .catch(err => res.json(err))
})

app.post('/create', (req, res) => {
    UserModel.create(req.body)
    .then(item => res.json(item))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price
    }).then(item => res.json(item))
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
