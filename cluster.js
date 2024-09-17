const cluster = require("node:cluster");
const http = require("node:http");
const os = require("node:os");

console.log(`CPUs : ${os.cpus().length}`);

if (cluster.isMaster) {
  console.log(`master : ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`worker : ${process.pid} is running`);

  http
    .createServer((req, res) => {
      if (req.url === "/") {
        res.writeHead(200, "ok", { "Content-Type": "text/plain" });
        res.end(`<h1>Home Page ${process.pid}</h1>`);
      } else if (req.url === "/about") {
        for (let i = 0; i < 6000000000; i++) {}
        res.writeHead(200, "ok", { "Content-Type": "text/plain" });
        res.end(`<h1>About Page ${process.pid}</h1>`);
      }
    })
    .listen(3000, () => {
      console.log("Server is running on port 4000");
    });
}
