exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    } else {
        const message = '로그인 필요'
        res.send({ message: message })
    }
}

exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next()
    } else {
        console.log('이미 로그인이 되어있습니다.')
        res.redirect(`/error`)
    }
}
