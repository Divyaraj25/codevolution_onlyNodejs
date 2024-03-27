// const https = require("node:https");
const crypto = require("node:crypto");

const start = Date.now();

// can max upto 8 thread in my system of 8 core processor
process.env.UV_THREADPOOL_SIZE = 16;
// max 4 thread in libuv
const max_calls = 16;

// syncronous version // takes average 750ms to execute one thread in my system
// because it is sync, it takes one thread at a time.
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512"); // takes one thread per time
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512"); // takes one + one thread per time
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512"); // takes one + one + one thread per time
// console.log("hash : ", Date.now() - start);

// asyncronous version
// because it is async, it can take multiple threads at the same time.
for (let i = 0; i < max_calls; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`hash: ${i + 1}`, ((Date.now() - start)/1000).toPrecision(4));
  });
}

// network i/o is network i/o operation not CPU bound operation, it does not use the threadpool
// for (let i = 0; i < max_calls; i++) {
//   https.request("https://www.google.com", (res) => {
//     res.on("data", () => {});
//     res.on("end", () => {
//       console.log(
//         `Request: ${i + 1}`,
//         ((Date.now() - start) / 1000).toPrecision(2)
//       );
//     });
//   }).end();
// }
