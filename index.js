const express = require('express')
const cors = require('cors')
const corsConfig = require('./cors/index')
const path = require('path')
const morgan = require('morgan')
const helmet = require('helmet')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const sessionStore = require('./session/index')
const passport = require('passport')
const passportConfig = require('./passport/index')
const { sequelize } = require('./models/index')

const indexRouter = require('./router/index')
const signUpRouter = require('./router/signUp')
const loginRouter = require('./router/login')
const addPlansRouter = require('./router/addPlans')
const deleteIdRouter = require('./router/deleteId')

const app = express()
dotenv.config()

app.set('port', process.env.SERVER_PORT || '3005')

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))

// sequelize
//     .sync({ force: false })
//     .then(() => {
//         console.log('데이터베이스 연결 성공')
//     })
//     .catch((err) => {
//         console.error(err)
//     })
// passportConfig()

// app.use(helmet())
// app.use(morgan('dev'))
// app.use(express.json())
// app.use(cors(corsConfig))
// app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser(process.env.COOKIE_SECRET))
// app.use(
//     expressSession({
//         resave: true,
//         saveUninitialized: false,
//         secret: process.env.COOKIE_SECRET,
//         store: sessionStore,
//         cookie: {
//             httpOnly: true,
//             secure: false,
//         },
//         name: 'session: planner',
//     })
// )
// app.use(passport.initialize())
// app.use(passport.session())

// app.use('/', indexRouter)
// app.use('/signup', signUpRouter)
// app.use('/login', loginRouter)
// app.use('/addPlans', addPlansRouter)
// app.use('/deleteId', deleteIdRouter)

// app.use((req, res, next) => {
//     const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
//     error.status = 404
//     next(error)
// })

// app.use((err, req, res, next) => {
//     res.locals.message = err.message
//     res.locals.error = process.env.ENV !== 'production' ? err : {}
//     res.status(err.status || 500)
//     res.render('error')
// })

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중')
})
