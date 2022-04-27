
const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req,res)=> {
    // 1st way
    // const rstream = fs.createReadStream('photos.txt');
    // rstream.on('data', (chunkData) => {
    //     res.write(chunkData);
    // });
    // rstream.on('end', ()=>{
    //     res.end();
    // });
    // rstream.on('error', (err) => {
    //     res.end(err);
    // });

    // 2nd way
    const rstream = fs.createReadStream('photos.txt');
    rstream.pipe(res);
});

server.listen(8000, '127.0.0.1', () =>{console.log('listening...')});


