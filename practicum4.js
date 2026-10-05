import events from "events";
import http from "http";

const emmiter = new events.EventEmitter();

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  emmiter.on("requestReceived", (method, url) => {
    console.log(`Request received: ${method} ${url}`);
  });
  emmiter.emit("requestReceived", method, url);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Событие обработано");
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
