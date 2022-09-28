const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const domains = [`${process.env.WEBSITE_URL}`]

const headers = {
    origin: function (origin, callback) {
        const isTrue = domains.indexOf(origin) !== -1
        callback(null, isTrue)
    },
    credentials: true,
}

module.exports = headers
