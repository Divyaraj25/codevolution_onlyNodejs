const { Worker } = require("node:worker_threads");
const http = require("node:http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, "ok", { "Content-Type": "text/plain" });
      res.end("<h1>Home Page</h1>");
    } else if (req.url === "/about") {
      const worker = new Worker("./worker-thread.js");
      worker.on("message", (j) => {
        res.writeHead(200, "ok", { "Content-Type": "text/plain" });
        res.end(`About Page ${j}`);
      });
    }
  })
  .listen(4000, () => {
    console.log("Server is running on port 4000");
  });
