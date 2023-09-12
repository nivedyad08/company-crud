const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/orbio')

const hrRoute = require('./routes/hrRoute')
const employeeRoute = require('./routes/employeeRoute')
const adminRoute = require('./routes/adminRoute')

app.use('/hr', hrRoute)
app.use('/employee', employeeRoute)
app.use('/admin', adminRoute)

app.listen(port, () => {
    console.log('server is running on port ', port);
})
