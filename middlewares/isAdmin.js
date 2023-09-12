const Employee = require('../models/userMdl')

const isAdmin = async (req, res, next) => {
    const { email } = req.body
    const user = await Employee.findOne({ email: email })
    if (!user)
        return res.status(400).json({ message: 'Invalid user !!' })
    if (user.role !== '1')
        return res.status(400).json({ message: 'User not authenticated' })
    next()
}


module.exports = isAdmin