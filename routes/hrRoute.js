const express = require('express')
const hrRoute = express()
const hrController = require('../controllers/hrController')
const isUser = require('../middlewares/isUser')

hrRoute.post('/create', isUser, hrController.createEmployee)
hrRoute.get('/emplyees', isUser, hrController.employees)
hrRoute.get('/user/create', hrController.addUser)






module.exports = hrRoute