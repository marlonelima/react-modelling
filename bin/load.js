const create = require("./scripts/create");
const checkLanguage = require("./scripts/verifications/language");

const isTypescript = checkLanguage();

module.exports = (program) => {
  program
    .command("component <name> [module]")
    .option("-u", "unique component")
    .option("-r", "reusable component")
    .description("create an structure")
    .action((name, module, options) => {
      if (options.u) {
        return create.uniqueComponent(name, module, isTypescript);
      }

      return create.reusableComponent(name, module, isTypescript);
    });

  program
    .command("router")
    .option("--init", "create react-router-dom file")
    .description("manage react-router-dom")
    .action((options) => {
      if (options.init) {
        return create.router(isTypescript);
      }
    });

  program
    .command("page <name> [module]")
    .description("creates pages in your application")
    .action((name, module) => {
      return create.page(name, module, isTypescript);
    });
};
