const http = require("node:http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, "ok", { "Content-Type": "text/plain" });
      res.end("<h1>Home Page</h1>");
    } else if (req.url === "/about") {
      for (let i = 0; i < 600000000000; i++) {}
      res.writeHead(200, "ok", { "Content-Type": "text/plain" });
      res.end("<h1>About Page</h1>");
    }
  })
  .listen(4000, () => {
    console.log("Server is running on port 4000");
  });
