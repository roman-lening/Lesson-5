import http from "http";
import moment from "moment";

const server = http.createServer((req, res) => {
  const date = moment().format("YYYY-MM-DD HH:mm:ss");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.end(`Current date and time: ${date}`);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
