const fs = require("fs");
const path = require("path");

module.exports = () => {
  return fs.existsSync(path.resolve() + "/tsconfig.json");
};
