const express = require('express')
const { Plan } = require('../models')
const router = express.Router()
const { isLoggedIn } = require('./middlewares')

router.post('/', isLoggedIn, async (req, res, next) => {
    const user = await req.user
    const id = user.id
    const reqUser = req.body
    console.log(id)

    const plan = await Plan.create({
        UserId: id,
        planDate: reqUser.planDate,
        startTime: reqUser.startTime,
        endTime: reqUser.endTime,
        planName: reqUser.planName,
    })
    res.send({ success: plan })
})
module.exports = router
