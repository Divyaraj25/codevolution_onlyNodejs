const fs = require('fs');

// Creating a buffer from a string
const bufferData = Buffer.from('Hello, this is a buffer!', 'utf-8');

// Writing the buffer to a file using streams
const fileWriteStream = fs.createWriteStream('output.txt');
fileWriteStream.write(bufferData);
fileWriteStream.end();

// Reading the file using streams
const fileReadStream = fs.createReadStream('output.txt', 'utf-8'
    //{ encoding: 'utf-8',
    // highWaterMark: 10 }
);

// console.log(fileReadStream);
fileReadStream.on('data', chunk => {
  console.log('Received chunk of data:', chunk);
});
fileReadStream.on('end', () => {
  console.log('Finished reading the file');
});