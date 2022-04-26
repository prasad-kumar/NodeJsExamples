
const http = require('http');

const server = http.createServer((req, res) => {
    
    if(req.url === '/'){
        res.end('<h1>Homepage</h1>');
    }else if(req.url === '/about'){
        res.end('<h1>About Us Page</h1>');
    }else if(req.url === '/contact'){
        res.end('<h1>Contact Us Page</h1>');
    }else{
        res.writeHead(404, {'content-type':'text/html'});
        res.end('<h1>404 Page not found!</h1>');
    }
    
});

server.listen(8000, 'localhost', ()=>console.log('listening...'));