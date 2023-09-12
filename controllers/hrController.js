const Employee = require('../models/userMdl')
const bcrypt = require('bcrypt')


const createEmployee = async (req, res) => {
    try {
        const { firstname, lastname, jobrole, email, password } = req.body
        if (!firstname || !lastname || !jobrole || !email || !password)
            return res.status(400).json({ message: 'All fields are required !!' })
        const addEmp = Employee({
            firstname,
            lastname,
            jobrole,
            email,
            password: await bcrypt.hash(password, 10),
            role: 3,// 1 -Admin, 2- HR, 3- Employee
            status: true,
            loginAttempts: 0,
            lastloggedDate: ''
        })
        const resEmp = await addEmp.save()
        if (!resEmp)
            return res.status(400).json({ message: 'Something went wrong' })
        return res.status(200).json({ message: 'Employee details added succesfully !!' })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: error.message })
    }
}

const employees = async (req, res) => {
    try {
        const empDetails = await Employee.find({})
        return res.status(200).json({ employees: empDetails })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const addUser = async (req, res) => {
    const addEmp = await Employee({
        firstname: 'Admin',
        lastname: 'A',
        jobrole: 'ADMIN',
        email: 'admin@gmail.com',
        password: await bcrypt.hash('password', 10),
        role: 1,// 1 -Admin, 2- HR, 3- Employee
        status: true,
        loginAttempts: 0
    })
    const resEmp = await addEmp.save()
    if (resEmp)
        return res.status(200).json({ message: 'user added successfully' })
}


module.exports = {
    createEmployee,
    employees,
    addUser
}