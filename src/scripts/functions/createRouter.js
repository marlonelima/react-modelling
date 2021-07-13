const fs = require("fs");

const TypescriptModels = require("../../models/typescript");

function create() {
  const componentsDirectory = `src/routes`;

  const routerFile = `${componentsDirectory}/index.tsx`;

  fs.mkdirSync(componentsDirectory, {
    recursive: true,
  });

  if (fs.existsSync(routerFile)) {
    return console.log("Error: Router already exists!");
  }

  fs.writeFileSync(routerFile, TypescriptModels.router(), {
    recursive: false,
  });

  return console.log("OK!");
}

module.exports = create;
