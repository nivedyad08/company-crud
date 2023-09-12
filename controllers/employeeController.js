const Employee = require('../models/userMdl')
const bcrypt = require('bcrypt')
const moment = require('moment')

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const currentDate = moment().format("MMM Do YY");
        if (!email || !password)
            return res.status(400).json({ message: 'All fields are required !!' })
        const isEmployee = await Employee.findOne({ email: email })
        if (!isEmployee)
            return res.status(400).json({ message: 'User not registered !!' })
        if (!isEmployee.status)
            return res.status(400).json({ message: 'Login failed !! Please contact administrator !!' })
        if (await bcrypt.compare(isEmployee.password, password)) {
            return res.status(200).json({ message: 'User login successfully', employee: isEmployee })
        } else {
            const updateLoginDate = await Employee.findByIdAndUpdate(isEmployee._id,
                {
                    $set:
                    {
                        lastloggedDate: currentDate,
                        loginAttempts: isEmployee.loginAttempts + 1
                    }
                })
            if (updateLoginDate.loginAttempts > 3 && updateLoginDate.lastloggedDate === moment().format("MMM Do YY")) {
                const updateEmpStatus = await Employee.findByIdAndUpdate(isEmployee._id, { $set: { status: false } })
            }
            return res.status(400).json({ message: 'Incorrect password' })
        }

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}



module.exports = {
    login
}