const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:zvnSZWUcDdTKxDeH@boiler-plate.cochrgg.mongodb.net/?retryWrites=true&w=majority', {})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! Hi'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))