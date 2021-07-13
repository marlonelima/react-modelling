const fs = require("fs");

const TypescriptModels = require("../../models/typescript");

const { normalizeString } = require("../../utils/formatters");

function create(name, module) {
  const normalizedPageName = normalizeString(name);
  const componentsDirectory = `src/pages`;

  const componentFinalFolder = `${componentsDirectory}/${
    module ? `${normalizeString(module)}/` : ""
  }${normalizedPageName}`;

  const indexFile = `${componentFinalFolder}/index.tsx`;
  const styledFile = `${componentFinalFolder}/styles.ts`;

  fs.mkdirSync(componentFinalFolder, {
    recursive: true,
  });

  if (fs.existsSync(indexFile)) {
    return console.log("Error: Page already exists!");
  }

  fs.writeFileSync(indexFile, TypescriptModels.page(normalizedPageName), {
    recursive: false,
  });
  fs.writeFileSync(styledFile, TypescriptModels.style(), {
    recursive: false,
  });

  return console.log("OK!");
}

module.exports = create;
