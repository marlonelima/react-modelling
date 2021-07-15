const configureController = require("../scripts/configure");

const inquirer = require("inquirer");

module.exports = (isTypescript) => {
  inquirer
    .prompt([
      {
        name: "style",
        message: "Would you prefer to use for styles?",
        choices: [
          { name: "Styled Components", value: "styled-components" },
          { name: "None of these", value: false },
        ],
        default: "styled-components",
        type: "list",
      },
      {
        name: "react_router_dom",
        message: "Do you want to install and configure React Router Dom?",
        default: true,
        type: "confirm",
      },
    ])
    .then((answers) => {
      if (answers.style === "styled-components") {
        configureController.styledComponents(isTypescript);
      }
      if (answers.react_router_dom) {
        configureController.reactRouterDom(isTypescript);
      }

      console.log("\x1b[32m", "OK!", "\x1b[0m");
      return console.log(
        "\x1b[33m",
        "Run YARN or NPM INSTALL to get all the dependencies",
        "\x1b[0m"
      );
    });
};
