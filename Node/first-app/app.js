import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;

  if (page === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Page Home</h1>`);
  } else if (page === "/panier") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Page panier</h1>`);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`<h1>Page not found</h1>`);
  }
});

server.listen(3000);
 