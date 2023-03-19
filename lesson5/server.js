
const http= require ("http");

const port = 3000;
const hostname = '127.0.0.1'

const MyServer=  http.createServer((req,res)=>{

          res.writeHead(200, {'Content-Type': 'text/html'});
       res.write("<h1>Hello</h1>");
       res.end();


});


MyServer.listen(port, hostname,  ()=>{

console.log(`your server is running at http://${ hostname }:${port}` );


});