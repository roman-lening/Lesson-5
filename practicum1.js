import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  fs.appendFile(
    "requests.log",
    `Method: ${method}, URL: ${url}, Date: ${new Date().toISOString()}\n`,
    (err) => {},
  );
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Запрос залогирован");
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
