import http from 'http';
const hostname = 'localhost';
const PORT = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 404;
    res.end();
});

server.listen(PORT, hostname,() => {
    console.log(`Server running at http://localhost:${PORT}/`)
})