const express = require('express')
const empRoute = express()
const employeeController = require('../controllers/employeeController')

empRoute.post('/login', employeeController.login)






module.exports = empRoute