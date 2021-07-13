#! /usr/bin/env node
const { program } = require("commander");

program.version("0.0.143");

const create = require("./src/scripts/create");

program
  .command("component <name>")
  .option("-u", "unique component")
  .option("-r", "reusable component")
  .option("-m <module>", "create component inside a module")
  .description("create an structure")
  .action((name, args) => {
    if (args.r) {
      return create.reusableComponent(name, args.m);
    }

    return create.uniqueComponent(name, args.m);
  });

program
  .command("router")
  .option("--init", "create react-router-dom file")
  .description("manage react-router-dom")
  .action((args) => {
    if (args.init) {
      return create.router();
    }
  });

program
  .command("page <name>")
  .option("-m <module>", "create component inside a module")
  .description("manage pages of your application")
  .action((name, args) => {
    return create.page(name, args.m);
  });

program.parse();
