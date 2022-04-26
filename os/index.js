
const os = require('os');

console.log(os.arch());
// x64

console.log(os.platform());
// win32

console.log(os.type());
// Windows_NT

console.log(os.hostname());
// DESKTOP-0HJ3SQH

console.log((os.totalmem())/1024/1024/1024);
console.log(`${os.freemem()/1024/1024/1024}`);

console.log((os.totalmem()/1073741824));

