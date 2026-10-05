import http from "http";

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  if (method === "POST" && url === "/submit") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      console.log(`Method: ${method}. URL: ${url}`);
      console.log(`Body: ${body}`);

      res.statusCode = 200;
      res.end(JSON.stringify({ message: "POST-запрос обработан" }));
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Not found" }));
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});