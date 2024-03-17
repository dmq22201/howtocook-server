const app = require("./src/app");
const config = require("./src/configs");

const PORT = config.app.port;

const server = app.listen(PORT, function () {
  console.log(`Server listening on port: ${PORT}`);
});
