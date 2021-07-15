const fs = require("fs");
const DualModels = require("../../models/dual");
const path = require("path");

const {
  normalizeString,
  normalizeDirectory,
} = require("../../utils/formatters");

module.exports = (name, module, isTypescript) => {
  const normalizedPageName = normalizeString(name);

  const pagesDirectory = path.join("src", "pages");

  const moduleIfSetted = module ? `${normalizeDirectory(module)}` : "";

  const pageFinalFolder = path.join(
    pagesDirectory,
    moduleIfSetted,
    normalizedPageName
  );

  const prefixLanguage = isTypescript ? "t" : "j";

  const indexFile = path.join(pageFinalFolder, `index.${prefixLanguage}sx`);
  const styledFile = path.join(pageFinalFolder, `styles.${prefixLanguage}s`);
  //
  //
  //
  //
  // checking and creating
  fs.mkdirSync(pageFinalFolder, {
    recursive: true,
  });

  if (fs.existsSync(indexFile)) {
    return console.log(
      "\x1b[31m%s\x1b[0m",
      "Error: Page already exists!",
      "\x1b[0m"
    );
  }

  fs.writeFileSync(indexFile, DualModels.page(normalizedPageName), {
    recursive: false,
  });
  fs.writeFileSync(styledFile, DualModels.style(), {
    recursive: false,
  });

  return console.log("\x1b[32m", "OK!", "\x1b[0m");
};
