const express = require('express')
const cors = require('cors')
const app = express()
// require

// settings
app.set('port', process.env.PORT || 8080)

// middleware
app.use(cors())
app.use(express.json())

// routes
app.use('/telegram', require('./routers/telegram.routes'))

module.exports = app
