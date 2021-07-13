const createComponent = require("./functions/createComponent");
const createRouter = require("./functions/createRouter");
const createPage = require("./functions/createPage");

class CreateController {
  reusableComponent(name, module) {
    return createComponent(name, module);
  }

  uniqueComponent(name, module) {
    return createComponent(name, module, true);
  }

  router() {
    return createRouter();
  }

  page(name, module) {
    return createPage(name, module);
  }
}

module.exports = new CreateController();
