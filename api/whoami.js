
module.exports = function(req, res) {
    var software = req.headers["user-agent"].match(/\((.*?)\)/)[1]
    var language = req.headers["accept-language"].split(',')[0]
    var headers = {
        ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        language: language, 
        software: software
    }
    res.send(headers)
}