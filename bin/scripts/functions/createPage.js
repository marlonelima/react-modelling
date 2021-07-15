const fs = require("fs");
const DualModels = require("../../models/dual");
const {
  normalizeString,
  normalizeDirectory,
} = require("../../utils/formatters");

module.exports = (name, module, isTypescript) => {
  const normalizedPageName = normalizeString(name);

  const pagesDirectory = `src/pages`;

  const moduleIfSetted = module ? `${normalizeDirectory(module)}/` : "";

  const pageFinalFolder = `${pagesDirectory}/${moduleIfSetted}${normalizedPageName}`;

  const prefixLanguage = isTypescript ? "t" : "j";

  const indexFile = `${pageFinalFolder}/index.${prefixLanguage}sx`;
  const styledFile = `${pageFinalFolder}/styles.${prefixLanguage}s`;
  //
  //
  //
  //
  // checking and creating
  fs.mkdirSync(pageFinalFolder, {
    recursive: true,
  });

  if (fs.existsSync(indexFile)) {
    return console.log("\x1b[31m%s\x1b[0m", "Error: Page already exists!");
  }

  fs.writeFileSync(indexFile, DualModels.page(normalizedPageName), {
    recursive: false,
  });
  fs.writeFileSync(styledFile, DualModels.style(), {
    recursive: false,
  });

  return console.log("\x1b[32m", "OK!");
};
