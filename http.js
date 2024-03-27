const http = require("node:http");

// req.url gives routes
// res.method gives methods = get,post, push, delete, ....
http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("hello world, in home page");
      console.log(req.method)
      res.end();
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("hello world, in about page");
      res.end();
    } else if (req.url === "/api") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(
        JSON.stringify({
          name: "John Doe",
          age: 34,
          isMarried: false,
        })
      );
      res.end();
    } else {
      res.writeHead(404);
      res.write("Page not found");
      res.end();
    }
  })
  .listen(3000);
