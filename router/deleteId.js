const express = require('express')
const { User } = require('../models')
const router = express.Router()
const bcrypt = require('bcrypt')
const { isLoggedIn } = require('./middlewares')

router.post('/', isLoggedIn, async (req, res, next) => {
    const loginInfo = await req.user
    const reqInfo = req.body
    const email = loginInfo.email
    let isDeleted = false
    let message = '삭제에 실패하였습니다.'
    const user = await User.findOne({
        where: { email },
    })
    // console.log(loginInfo.password, '     :     ', user.password)
    const isSamePassword = await bcrypt.compare(reqInfo.password, user.password)
    if (isSamePassword) {
        const destroyRes = User.destroy({
            where: { email: email },
        })
        isDeleted = destroyRes
        message = '성공적으로 삭제되었습니다.'
    }
    console.log(isSamePassword)
    // console.log(user)
    res.send({ success: isDeleted, message: message })
})
module.exports = router
