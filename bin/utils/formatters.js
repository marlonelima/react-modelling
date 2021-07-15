function normalizeString(string) {
  const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

  return capitalizedString.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function normalizeDirectory(path) {
  const myDirectoryList = path.split("/");
  let formatedDirectoryList = [];

  for (const dir of myDirectoryList) {
    formatedDirectoryList.push(dir.charAt(0).toUpperCase() + dir.slice(1));
  }

  return formatedDirectoryList.join("/");
}

module.exports = {
  normalizeString,
  normalizeDirectory,
};
