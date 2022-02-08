import http from "http";

import { getTitle } from "./controllers/scrape.js";
import { makeHtml } from "./utils/helper.js";

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const baseUrl = url.split("?")[0];
  const query = url.split("?")[1];
  const params = new URLSearchParams(query).getAll("address");
  const method = req.method;

  if (baseUrl === "/I/want/title/" && params.length !== 0 && method === "GET") {
    return getTitle(params, (titles) => {
      const html = makeHtml(titles);
      res.write(html);
      res.end();
    });
  }
  //   return client error for all other requests
  res.statusCode = 400;
  res.write("Bad request");
  res.end();
});

server.listen(PORT, () => {
  console.log("Server listining on port ", PORT);
});
