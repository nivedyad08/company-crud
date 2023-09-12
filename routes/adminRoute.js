const express = require('express')
const adminRoute = express()
const adminController = require('../controllers/adminController')
const isAdmin = require('../middlewares/isAdmin')

adminRoute.get('/emplyees', isAdmin, adminController.employees)
adminRoute.put('/updateUser', isAdmin, adminController.updateUser)





module.exports = adminRoute