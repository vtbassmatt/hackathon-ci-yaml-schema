var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    console.log('got request for ' + request.url);

    if (!request.url.endsWith('.json')) {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end("404 - we only serve .json files!", 'utf-8');
    }

    var filePath = '..' + request.url;
    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){
                response.writeHead(404, { 'Content-Type': 'text/html' });
                response.end("404!", 'utf-8');
            }
            else {
                response.writeHead(500);
                response.end('Internal error: ' + error.code + ' ..\n');
                response.end(); 
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(content, 'utf-8');
        }
    });

}).listen(8000);
console.log('Server running on port 8000');