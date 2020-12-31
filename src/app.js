const express = require('express')
const cors = require('cors')
const app = express()

// settings
app.set('port', process.env.PORT || 8080)

// middleware
app.use(cors())
app.use(express.json())

// routes
app.get('/api', (req, res) => {
  console.log('la api funciona')
  res.send({ messege: true, port: `${app.set('port')}` })
})

module.exports = app
