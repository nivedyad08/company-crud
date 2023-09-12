const Employee = require('../models/userMdl')

const employees = async (req, res) => {
    try {
        const empDetails = await Employee.find({})
        return res.status(200).json({ employees: empDetails })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const { userId } = req.query
        if (!userId)
            return res.status(400).json({ message: 'Invalid request' })
        const isUser = await Employee.findById(userId)
        if (!isUser)
            return res.status(400).json({ message: 'User not registered !!' })
        const updateUser = await Employee.findByIdAndUpdate(userId, { $set: { status: true } })
        if (!updateUser)
            return res.status(400).json({ message: 'Something went wrong' })
        return res.status(200).json({ message: 'Status updated sucessfully' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

module.exports = {
    employees,
    updateUser
}