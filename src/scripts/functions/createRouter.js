const fs = require("fs");

const TypescriptModels = require("../../models/typescript");

function create() {
  const componentsDirectory = `src/routes`;

  const routerFile = `${componentsDirectory}/index.tsx`;

  fs.mkdirSync(componentsDirectory, {
    recursive: true,
  });

  if (fs.existsSync(routerFile)) {
    return console.log("\x1b[31m%s\x1b[0m", "Error: Router already exists!");
  }

  fs.writeFileSync(routerFile, TypescriptModels.router(), {
    recursive: false,
  });

  return console.log("\x1b[32m", "OK!");
}

module.exports = create;
