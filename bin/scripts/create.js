const createComponent = require("./functions/createComponent");
const createRouter = require("./functions/createRouter");
const createPage = require("./functions/createPage");

class CreateController {
  reusableComponent(name, module, isTypescript) {
    return createComponent(name, module, false, isTypescript);
  }

  domainComponent(name, module, isTypescript) {
    return createComponent(name, module, true, isTypescript);
  }

  router(isTypescript) {
    return createRouter(isTypescript);
  }

  page(name, module, isTypescript) {
    return createPage(name, module, isTypescript);
  }
}

module.exports = new CreateController();
