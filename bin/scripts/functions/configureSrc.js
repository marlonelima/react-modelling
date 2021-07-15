const fs = require("fs");
const DualModels = require("../../models/dual");
const path = require("path");

module.exports = (isTypescript) => {
  const baseDirectory = "src";

  const language = isTypescript ? "tsx" : "js";
  const languagePrefix = isTypescript ? "ts" : "js";

  const appFile = path.join(baseDirectory, `App.${language}`);
  const indexFile = path.join(baseDirectory, `index.${language}`);

  //
  //
  //
  //
  // checking, deleting and creating
  if (!fs.existsSync("src")) {
    fs.mkdirSync("src");
  }

  fs.rmSync(path.join(baseDirectory, "App.css"), {
    recursive: false,
    force: true,
  });
  fs.rmSync(path.join(baseDirectory, `App.test.${language}`), {
    recursive: false,
    force: true,
  });
  fs.rmSync(path.join(baseDirectory, "index.css"), {
    recursive: false,
    force: true,
  });
  fs.rmSync(path.join(baseDirectory, "logo.svg"), {
    recursive: false,
    force: true,
  });
  fs.rmSync(path.join(baseDirectory, `reportWebVitals.${languagePrefix}`), {
    recursive: false,
    force: true,
  });
  fs.rmSync(path.join(baseDirectory, `setupTests.${languagePrefix}`), {
    recursive: false,
    force: true,
  });

  fs.writeFileSync(appFile, DualModels.reactApp(), {
    flag: "w",
  });

  fs.writeFileSync(indexFile, DualModels.reactIndex(), {
    flag: "w",
  });
};
