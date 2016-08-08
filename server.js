var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var port = process.env.PORT || 80

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(logger('dev'))
app.use(express.static(__dirname + '/public'))

app.listen(port, function(error){
    if(error) console.log('ERROR starting server!', error)
    if(!error) console.log('Server started successfully on port:', port)
})
