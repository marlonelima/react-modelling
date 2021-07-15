const fs = require("fs");
const DualModels = require("../../models/dual");

module.exports = (isTypescript) => {
  const routesDirectory = `src/routes`;

  const prefixLanguage = isTypescript ? "t" : "j";

  const routerFile = `${routesDirectory}/index.${prefixLanguage}sx`;
  //
  //
  //
  //
  // checking and creating
  fs.mkdirSync(routesDirectory, {
    recursive: true,
  });

  if (fs.existsSync(routerFile)) {
    return console.log("\x1b[31m%s\x1b[0m", "Error: Router already exists!");
  }

  fs.writeFileSync(routerFile, DualModels.router(), {
    recursive: false,
  });

  return console.log("\x1b[32m", "OK!");
};
