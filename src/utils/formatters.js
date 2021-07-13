function normalizeString(string) {
  const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

  return capitalizedString.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

module.exports = {
  normalizeString,
};
