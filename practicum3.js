import http from "http";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5555;
const message = process.env.MESSAGE || "Error";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(message);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
