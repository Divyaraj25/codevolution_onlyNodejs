const fs = require("fs");
const path = require("path");

// directed to files directory
const dirPath = path.join(__dirname, "files");

for (let i = 0; i < 5; i++) {
  fs.writeFileSync(
    `${dirPath}/file${i + 1}.txt`,
    `This is file number ${i + 1}`
  );
}

// to delete file
fs.unlinkSync(`${dirPath}/file3.txt`);
console.log("file3 is deleted");

// rename file
fs.renameSync(`${dirPath}/file1.txt`, `${dirPath}/file6.txt`)

let file2 = fs.readFileSync(`${dirPath}/file2.txt`)
console.log(file2.toString());
console.log(file2); // gives buffer object

// to read files in the folder
fs.readdir(dirPath, (err, files) => {
  // console.log(files); // gives list of files in form of array
  // array items one by one
  files.forEach((file) => {
    console.log(file);
  });
});