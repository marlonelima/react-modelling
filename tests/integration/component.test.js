const exec = require("../helpers/exec");
const fs = require("fs");

describe("page", () => {
  test("JAVASCRIPT - should create a non-reusable component in javascript", async () => {
    const cli = await exec(["component mycomponent"]);

    const isIndexCreated = await fs.existsSync(
      "src/domain/mycomponent/index.jsx"
    );
    const isSyleCreated = await fs.existsSync(
      "src/domain/mycomponent/styles.js"
    );

    expect(isIndexCreated).toBeTruthy();
    expect(isSyleCreated).toBeTruthy();
    expect(cli.stdout).toBe("\x1B[32m OK!\n");
  });

  test("JAVASCRIPT - should create a reusable component", async () => {
    const cli = await exec(["component mycomponent -r"]);

    const isIndexCreated = await fs.existsSync(
      "src/components/mycomponent/index.jsx"
    );
    const isSyleCreated = await fs.existsSync(
      "src/components/mycomponent/styles.js"
    );

    expect(isIndexCreated).toBeTruthy();
    expect(isSyleCreated).toBeTruthy();
    expect(cli.stdout).toBe("\x1B[32m OK!\n");
  });

  test("JAVASCRIPT - should create a non-reusable component inside a module", async () => {
    const cli = await exec(["component mycomponent -m mymodule"]);

    const isIndexCreated = await fs.existsSync(
      "src/domain/mymodule/mycomponent/index.jsx"
    );
    const isSyleCreated = await fs.existsSync(
      "src/domain/mymodule/mycomponent/styles.js"
    );

    expect(isIndexCreated).toBeTruthy();
    expect(isSyleCreated).toBeTruthy();
    expect(cli.stdout).toBe("\x1B[32m OK!\n");
  });

  test("JAVASCRIPT - should create a reusable component inside a module", async () => {
    const cli = await exec(["component mycomponent -r -m mymodule"]);

    const isIndexCreated = await fs.existsSync(
      "src/components/mymodule/mycomponent/index.jsx"
    );
    const isSyleCreated = await fs.existsSync(
      "src/components/mymodule/mycomponent/styles.js"
    );

    expect(isIndexCreated).toBeTruthy();
    expect(isSyleCreated).toBeTruthy();
    expect(cli.stdout).toBe("\x1B[32m OK!\n");
  });
});
