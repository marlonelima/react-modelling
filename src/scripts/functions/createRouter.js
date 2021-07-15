const fs = require("fs");

const DualModels = require("../../models/dual");

function create(isTypescript) {
  const componentsDirectory = `src/routes`;

  const prefixLanguage = isTypescript ? "t" : "j";

  const routerFile = `${componentsDirectory}/index.${prefixLanguage}sx`;

  fs.mkdirSync(componentsDirectory, {
    recursive: true,
  });

  if (fs.existsSync(routerFile)) {
    return console.log("\x1b[31m%s\x1b[0m", "Error: Router already exists!");
  }

  // creating
  fs.writeFileSync(routerFile, DualModels.router(), {
    recursive: false,
  });

  return console.log("\x1b[32m", "OK!");
}

module.exports = create;
