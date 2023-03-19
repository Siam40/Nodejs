
// const http= require ("http");

// http.createServer((req,res)=>{


//        res.end("hello.I am your first server");



// }).listen(3000);




// const http= require ("http");

// const MyServer=  http.createServer((req,res)=>{


//        res.end("hello.I am your first server");



// });


// MyServer.listen(3000, ()=>{

// console.log("your server is running at localhot:3000");


// });






const http= require ("http");

const port = 3000;
const hostname = '127.0.0.1'

const MyServer=  http.createServer((req,res)=>{


       res.end("hello.I am your first server");



});


MyServer.listen(port, hostname,  ()=>{

console.log(`your server is running at http://${ hostname }:${port}` );


});