const path = require('node:path') // also available as `require('path')`

// console.log(__filename) // gives file directory with filename
// console.log(path.basename(__filename)) // gives last part of the path (file name)
// console.log(path.extname(__filename)) // gives extension of the file
// console.log(path.parse(__filename)) // gives an object with various properties about the path, including

// console.log(__dirname) // gives parent directory of the file
// console.log(path.basename(__dirname)) // gives last part of the parent directory
// console.log(path.extname(__dirname)) // gives blank because it is directory
// console.log(path.parse(__dirname)) // gives an object similar to parse() but without extname

// path.join()
console.log("\npath.join()\n")
console.log(path.join('folder', 'folder1', 'test.js')) // folder as root dir
console.log(path.join('/folder', 'folder1', 'test.js')) // /folder as root dir
console.log(path.join('/folder', '//folder1', 'test.js')) // //folder1 as relative to /folder
console.log(path.join('/folder', '//folder1', '../test.js')) // ../test.js is to go back one level from "/folder/folder1/test.js" to "/folder/test.js"
console.log(path.join('/folder', '//folder1', './test.js')) 
console.log(path.join(__dirname,'data.json')) // joins the data.json to dir path

// path.resolve()
console.log("\npath.resolve()\n")
console.log(path.resolve('folder', 'folder1', 'test.js')) // joins all this to dir path
console.log(path.resolve('/folder', 'folder1', 'test.js')) // joins all this to root dir path that is D://
console.log(path.resolve('/folder', '//folder1', 'test.js')) // "//" creates a root dir before this no one is added to path, means folder is not in the path, starts with folder1
console.log(path.resolve('/folder', '//folder1', '../test.js')) // ../test.js same as upward
console.log(path.resolve('/folder', '//folder1', './test.js')) 
console.log(path.resolve(__dirname,'data.json')) // joins the data.json to dir path
console.log(path.parse(path.resolve(__dirname,'data.json'))) // gives an object with various properties about the path
