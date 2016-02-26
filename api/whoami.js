
module.exports = function(req, res) {
    var software = req.headers["user-agent"].match(/\((.*?)\)/)[1]
    var language = req.headers["accept-language"].split(',')[0]
    var headers = {
        ipaddress: req.ip,
        language: language, 
        software: software
    }
    res.send(headers)
}