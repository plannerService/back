const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy

const User = require('../models/users')

module.exports = () => {
    passport.use(
        new LocalStrategy(
            {
                usernameField: 'email',
            },
            async (username, password, done) => {
                try {
                    const user = await User.findOne({
                        where: { email: username },
                    })
                    if (user) {
                        const isSamePassword = await bcrypt.compare(
                            password,
                            user.password
                        )
                        if (isSamePassword) {
                            done(null, user)
                        } else {
                            return done(null, false, {
                                message: 'Incorrect password.',
                            })
                        }
                    } else {
                        return done(null, false, {
                            message: 'Incorrect email.',
                        })
                    }
                } catch (err) {
                    console.error(err)
                    done(err)
                }
            }
        )
    )
}
