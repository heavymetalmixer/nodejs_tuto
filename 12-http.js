const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === `/`) {
    res.end("Welcome to our home page!");
  }

  else if (req.url === `/about`) {
    res.end("Here is our short history");
  }

  else {
    res.end(`
      <h1>Ooops!</h1>
        <p>We can't seem to find the page you're looking for</p>
        <a href="/">Click here to go back to Home</a>
    `);
  }
});

server.listen(5000);
