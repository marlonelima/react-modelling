const create = require("./scripts/create");
const checkLanguage = require("./scripts/verifications/language");
const path = require("path");
const isTypescript = checkLanguage();

module.exports = (program) => {
  program
    .command("component <name>")
    .option("-u", "unique component")
    .option("-r", "reusable component")
    .option("-m <module>", "create component inside a module")
    .option("-sm <submodule>", "create sub-module")
    .description("create an structure")
    .action((name, args) => {
      if (args.r) {
        return create.reusableComponent(name, args.m, isTypescript);
      }

      return create.uniqueComponent(name, args.m, isTypescript);
    });

  program
    .command("router")
    .option("--init", "create react-router-dom file")
    .description("manage react-router-dom")
    .action((args) => {
      if (args.init) {
        return create.router(isTypescript);
      }
    });

  program
    .command("page <name>")
    .option("-m <module>", "create component inside a module")
    .description("manage pages of your application")
    .action((name, args) => {
      return create.page(name, args.m, isTypescript);
    });
};
