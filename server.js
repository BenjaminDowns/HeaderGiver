var express = require('express')
var app = express()
var path = require('path')
var port = process.env.PORT || 8080;
var whoami = require('./api/whoami.js')


app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/whoami', whoami)

app.get('*', function(req, res) {
    res.send('index')
})

app.listen(port)