const fs = require("fs");

const DualModels = require("../../models/dual");

const { normalizeString } = require("../../utils/formatters");

function create(name, module, domain, isTypescript) {
  const normalizedComponentName = normalizeString(name);

  const baseDirectory = `src/${domain ? "domain" : "components"}`;

  const componentFinalFolder = `${baseDirectory}/${
    module ? `${normalizeString(module)}/` : ""
  }${normalizedComponentName}`;

  const prefixLanguage = isTypescript ? "t" : "j";
  const indexFile = `${componentFinalFolder}/index.${prefixLanguage}sx`;
  const styledFile = `${componentFinalFolder}/styles.${prefixLanguage}s`;

  fs.mkdirSync(componentFinalFolder, {
    recursive: true,
  });

  if (fs.existsSync(indexFile)) {
    return console.log("\x1b[31m%s\x1b[0m", "Error: Component already exists!");
  }

  // creating
  fs.writeFileSync(indexFile, DualModels.component(normalizedComponentName), {
    recursive: false,
  });

  fs.writeFileSync(styledFile, DualModels.style(), {
    recursive: false,
  });

  return console.log("\x1b[32m", "OK!");
}

module.exports = create;
