const path = require("path");

function normalizeString(string) {
  const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

  return capitalizedString.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function normalizeDirectory(directory) {
  const myDirectoryList = directory.split("/");
  let formatedDirectoryList = [];

  for (const dir of myDirectoryList) {
    formatedDirectoryList.push(dir.charAt(0).toUpperCase() + dir.slice(1));
  }

  return path.join(...formatedDirectoryList);
}

module.exports = {
  normalizeString,
  normalizeDirectory,
};
