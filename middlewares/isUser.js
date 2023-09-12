const Employee = require('../models/userMdl')

const isUser = async (req, res, next) => {
    const { userId } = req.body
    const user = await Employee.findById(userId)
    console.log(user);
    if (!user)
        return res.status(400).json({ message: 'Invalid user !!' })
    if (user.role !== '2')
        return res.status(400).json({ message: 'User not authenticated' })
    next()
}


module.exports = isUser