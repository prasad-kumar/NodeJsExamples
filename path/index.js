
const path = require('path');

//replace '\' to '/' in path

console.log(path.dirname('D:/Development/GitHub/NodeJsExamples/path/index.js'));
// D:/Development/GitHub/NodeJsExamples/path

console.log(path.basename('D:/Development/GitHub/NodeJsExamples/path/index.js'));
// index.js

console.log(path.extname('D:/Development/GitHub/NodeJsExamples/path/index.js'));
// .js

console.log(path.parse('D:/Development/GitHub/NodeJsExamples/path/index.js'));

// {
//   root: 'D:/',
//   dir: 'D:/Development/GitHub/NodeJsExamples/path',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }
