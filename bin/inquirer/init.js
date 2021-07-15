const configureRoom = require("../scripts/configure");

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
      {
        name: "delete_react_file",
        message:
          "Do you want to configure SRC folder? ----------- CAUTION: App and index will be replaced",
        default: false,
        type: "confirm",
      },
    ])
    .then((answers) => {
      if (answers.style === "styled-components") {
        configureRoom.styledComponents(isTypescript);
      }
      if (answers.react_router_dom) {
        configureRoom.reactRouterDom(isTypescript);
      }

      if (answers.delete_react_file) {
        configureRoom.configureSrc(isTypescript);
      }

      console.log("\x1b[32m", "OK!", "\x1b[0m");
      return console.log(
        "\x1b[33m",
        "Run YARN or NPM INSTALL to get all the dependencies",
        "\x1b[0m"
      );
    });
};
