let http = require('http')
let fs = require ('fs')
let server = http.createServer()


server.on('request', (request, response) => {       
    fs.readFile('index.html', (err, data) => {
        if (err) {
            fs.readFile('err.html',(err, data) => {
                response.writeHead(400)
                response.end(data)
            })
        }else{
    response.writeHead(200)
    response.end(data)
        }
    })    



})
server.listen(8080)
console.log("Site web démarré")