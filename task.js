import http from "http";

const server = http.createServer((req, res) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.end("Authorization header logged, and Cache-Control header set");
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


