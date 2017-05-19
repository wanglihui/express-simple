//这是启动文件

var http = require("http");
var app = require("./index");

const PORT = 3002;

var server = http.createServer(app)

server.listen(PORT, function(err) {
    if (err) {
        throw err;
    }
    console.log('SERVER START ON ', PORT);
});
