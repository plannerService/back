const express = require('express')
const bcrypt = require('bcrypt')
const { User } = require('../models')
const router = express.Router()

const saltRounds = 10

router.post('/', async (req, res, next) => {
    const password = await bcrypt.hash(req.body.password, saltRounds)
    const result = await User.create({
        email: req.body.email,
        password: password,
        name: req.body.name,
        tel: req.body.tel,
    })
    res.send({ success: true })
    console.log("signUp-'/' : ", result)
})
module.exports = router
