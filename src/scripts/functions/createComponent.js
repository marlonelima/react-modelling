const fs = require("fs");

const TypescriptModels = require("../../models/typescript");

const { normalizeString } = require("../../utils/formatters");

function create(name, module, domain = false) {
  const normalizedComponentName = normalizeString(name);
  const componentsDirectory = `src/${domain ? "domain" : "components"}`;

  const componentFinalFolder = `${componentsDirectory}/${
    module ? `${normalizeString(module)}/` : ""
  }${normalizedComponentName}`;

  const indexFile = `${componentFinalFolder}/index.tsx`;
  const styledFile = `${componentFinalFolder}/styles.ts`;

  fs.mkdirSync(componentFinalFolder, {
    recursive: true,
  });

  if (fs.existsSync(indexFile)) {
    return console.log("Error: Component already exists!");
  }

  fs.writeFileSync(
    indexFile,
    TypescriptModels.component(normalizedComponentName),
    {
      recursive: false,
    }
  );

  fs.writeFileSync(styledFile, TypescriptModels.style(), {
    recursive: false,
  });

  return console.log("OK!");
}

module.exports = create;