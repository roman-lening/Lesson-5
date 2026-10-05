import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  const metod = req.method;
  const path = req.url;

  if (metod === "GET") {
    if (path === "/") {
      res.end("Welcome to the home page!");
    } else if (path === "/about") {
      res.end("This is the about page.");
    } else if (path === "/contact") {
      res.end("This is the contact page.");
    } else {
      res.statusCode = 404;
      res.end("Page Not Found");
    }
  } else if (metod === "POST") {
    res.statusCode = 201;
    if (path === "/submit") {
      res.end("Form submitted successfully!");
    } else {
      res.statusCode = 404;
      res.end("Page Not Found");
    }
  } else {
    res.statusCode = 405;
    res.end("Method Not Allowed");
  }
});
const port = 3333;
server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
