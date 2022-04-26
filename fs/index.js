
const fs = require('fs');

// Synchronus CRUD

// Create
fs.mkdirSync('prasad');
fs.writeFileSync('prasad/bio.txt', 'My name is Prasad');

// Update
fs.appendFileSync('prasad/bio.txt', ' and my age is 24');

// Rename
fs.renameSync('prasad/bio.txt', 'prasad/mybio.txt');

// Read
console.log(fs.readFileSync('prasad/mybio.txt', 'utf8'));

//Delete
fs.unlinkSync('prasad/mybio.txt');
fs.rmdirSync('prasad');



// Asynchronus CRUD

// Create
fs.mkdir('kumar', (err)=>{console.log('folder created')});
fs.writeFile('kumar/info.txt', 'My name is Kumar', (err) => {console.log('file created')});

// Update
fs.appendFile('kumar/info.txt', ' My age is 20', (err) => {console.log('file updated')});

// Rename
fs.rename('kumar/info.txt', 'kumar/myinfo.txt', (err) => {console.log('file renamed successfully')});

// Read 
fs.readFile('kumar/myinfo.txt', 'utf8', (err, data) => {console.log(data)});

// Delete
fs.unlink('kumar/myinfo.txt', (err) => {console.log('file deleted')});
fs.rmdir('kumar', (err) => {console.log('folder deleted')});


