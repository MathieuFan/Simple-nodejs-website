let http     =  require('http')
let fs       =  require('fs')
let server   =  http.createServer()
let url      =  require('url')
server.on('request', (request, response) => {       
var page = url.parse(request.url).pathname;
    console.log('adresse utilisée: localhost:8080'+page);
    
    if(page == '/accueil'){ 
    fs.readFile('index.html', (err, data) => {
    response.writeHead(200)
    response.end(data)
        })
      }else{
    fs.readFile('err.html',(err, data) => {
                response.writeHead(400)
                response.end(data)
            })
      }

})
server.listen(8080)
console.log("Site web démarré")
