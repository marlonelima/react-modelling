const fs = require("fs");

module.exports = (name, version, dev) => {
  const myPackage = JSON.parse(fs.readFileSync("package.json"));

  if (dev) {
    !myPackage.devDependencies && (myPackage.devDependencies = {});
    myPackage.devDependencies[name] = "^" + version;
  } else {
    !myPackage.dependencies && (myPackage.dependencies = {});
    myPackage.dependencies[name] = "^" + version;
  }

  return fs.writeFileSync("package.json", JSON.stringify(myPackage, null, 2));
};
