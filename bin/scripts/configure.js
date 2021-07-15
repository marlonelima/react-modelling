const addDependencies = require("./functions/addDependencies");
const configureSrc = require("./functions/configureSrc");

class ConfigureRoom {
  styledComponents(isTypescript) {
    if (isTypescript) {
      addDependencies("@types/styled-components", "5.1.11", true);
    }

    return addDependencies("styled-components", "5.3.0", false);
  }

  reactRouterDom(isTypescript) {
    if (isTypescript) {
      addDependencies("@types/react-router-dom", "5.1.8", true);
    }

    return addDependencies("react-router-dom", "5.2.0", false);
  }

  configureSrc(isTypescript) {
    return configureSrc(isTypescript);
  }
}

module.exports = new ConfigureRoom();
