// it is helpful when the data is to big and takes more time and space
// fs module has event emitter

const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

const readStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 4, // it takes 4 chunk at a time
});

// method - 3 using pipe chaning and create a zip gz file
readStream.pipe(gzip).pipe(fs.WriteStream('./newFile.txt.gz'));

const writeStream = fs.createWriteStream("./newFile.txt");

// method - 2 using pipe - pipe is used to connect readable stream to writeable stream
// readStream.pipe(writeStream);

// method 1 - long method to do

// readStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeStream.write(chunk);
// });
