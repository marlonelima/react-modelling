const fs = require("fs");
const DualModels = require("../../models/dual");
const path = require("path");

const {
  normalizeString,
  normalizeDirectory,
} = require("../../utils/formatters");

module.exports = (name, module, unique, isTypescript) => {
  const normalizedComponentName = normalizeString(name);

  const baseDirectory = path.join("src", unique ? "domain" : "components");

  const moduleIfSetted = module ? `${normalizeDirectory(module)}` : "";

  const componentFinalFolder = path.join(
    baseDirectory,
    moduleIfSetted,
    normalizedComponentName
  );

  const prefixLanguage = isTypescript ? "t" : "j";

  const indexFile = path.join(
    componentFinalFolder,
    `index.${prefixLanguage}sx`
  );
  const styledFile = path.join(
    componentFinalFolder,
    `styles.${prefixLanguage}s`
  );
  //
  //
  //
  //
  // checking and creating
  fs.mkdirSync(componentFinalFolder, {
    recursive: true,
  });

  if (fs.existsSync(indexFile) || fs.existsSync(styledFile)) {
    return console.log(
      "\x1b[31m%s\x1b[0m",
      "Error: Component already exists!",
      "\x1b[0m"
    );
  }

  fs.writeFileSync(indexFile, DualModels.component(normalizedComponentName), {
    recursive: false,
  });

  fs.writeFileSync(styledFile, DualModels.style(), {
    recursive: false,
  });

  return console.log("\x1b[32m", "OK!", "\x1b[0m");
};
