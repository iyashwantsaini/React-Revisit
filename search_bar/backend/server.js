const http = require("http");

const app = require("./api/app");

const server = http.createServer(app);

server.listen(5000, () => {
  console.log("server running on 5000!");
});
