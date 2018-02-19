var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

const apiRoutes = require('./routes/api')

var server = express()

// middleware
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

//routes
server.use('/api/v1/', apiRoutes)

// wildcard route
server.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })

module.exports = server
