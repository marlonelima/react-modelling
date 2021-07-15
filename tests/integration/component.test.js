const exec = require("../helpers/exec");
const fs = require("fs");
const path = require("path");

describe("page", () => {
  test("JAVASCRIPT - should create a non-reusable component in javascript", async () => {
    const cli = await exec(["component mycomponent -u"]);

    const isIndexCreated = await fs.existsSync(
      path.resolve("temp_test", "src", "domain", "mycomponent", "index.jsx")
    );
    const isSyleCreated = await fs.existsSync(
      path.resolve("temp_test", "src", "domain", "mycomponent", "styles.js")
    );

    expect(isIndexCreated).toBeTruthy();
    expect(isSyleCreated).toBeTruthy();
    expect(cli.stdout).toBe("\x1B[32m OK! \x1B[0m\n");
  });

  test("JAVASCRIPT - should create a reusable component", async () => {
    const cli = await exec(["component mycomponent"]);

    const isIndexCreated = await fs.existsSync(
      path.resolve("temp_test", "src", "components", "mycomponent", "index.jsx")
    );
    const isSyleCreated = await fs.existsSync(
      path.resolve("temp_test", "src", "components", "mycomponent", "styles.js")
    );

    expect(isIndexCreated).toBeTruthy();
    expect(isSyleCreated).toBeTruthy();
    expect(cli.stdout).toBe("\x1B[32m OK! \x1B[0m\n");
  });

  test("JAVASCRIPT - should create a non-reusable component inside a module", async () => {
    const cli = await exec(["component mycomponent -u mymodule/mysubmodule"]);

    const isIndexCreated = await fs.existsSync(
      path.resolve(
        "temp_test",
        "src",
        "domain",
        "mymodule",
        "mysubmodule",
        "mycomponent",
        "index.jsx"
      )
    );
    const isSyleCreated = await fs.existsSync(
      path.resolve(
        "temp_test",
        "src",
        "domain",
        "mymodule",
        "mysubmodule",
        "mycomponent",
        "styles.js"
      )
    );

    expect(isIndexCreated).toBeTruthy();
    expect(isSyleCreated).toBeTruthy();
    expect(cli.stdout).toBe("\x1B[32m OK! \x1B[0m\n");
  });

  test("JAVASCRIPT - should create a reusable component inside a module", async () => {
    const cli = await exec(["component mycomponent mymodule/mysubmodule"]);

    const isIndexCreated = await fs.existsSync(
      path.resolve(
        "temp_test",
        "src",
        "components",
        "mymodule",
        "mysubmodule",
        "mycomponent",
        "index.jsx"
      )
    );
    const isSyleCreated = await fs.existsSync(
      path.resolve(
        "temp_test",
        "src",
        "components",
        "mymodule",
        "mysubmodule",
        "mycomponent",
        "styles.js"
      )
    );

    expect(isIndexCreated).toBeTruthy();
    expect(isSyleCreated).toBeTruthy();
    expect(cli.stdout).toBe("\x1B[32m OK! \x1B[0m\n");
  });
});
