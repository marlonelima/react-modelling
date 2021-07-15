const exec = require("../helpers/exec");
const fs = require("fs");
const path = require("path");

describe("page", () => {
  test("JAVASCRIPT - should create a new page", async () => {
    const cli = await exec(["page mypage"]);

    const isIndexCreated = await fs.existsSync(
      path.resolve("temp_test", "src", "pages", "mypage", "index.jsx")
    );
    const isSyleCreated = await fs.existsSync(
      path.resolve("temp_test", "src", "pages", "mypage", "styles.js")
    );

    expect(isIndexCreated).toBeTruthy();
    expect(isSyleCreated).toBeTruthy();
    expect(cli.stdout).toBe("\x1B[32m OK! \x1B[0m\n");
  });

  test("JAVASCRIPT - should create a new page inside a module", async () => {
    const cli = await exec(["page mypage mymodule/mysubmodule"]);

    const isIndexCreated = await fs.existsSync(
      path.resolve(
        "temp_test",
        "src",
        "pages",
        "mymodule",
        "mysubmodule",
        "mypage",
        "index.jsx"
      )
    );
    const isSyleCreated = await fs.existsSync(
      path.resolve(
        "temp_test",
        "src",
        "pages",
        "mymodule",
        "mysubmodule",
        "mypage",
        "styles.js"
      )
    );

    expect(isIndexCreated).toBeTruthy();
    expect(isSyleCreated).toBeTruthy();
    expect(cli.stdout).toBe("\x1B[32m OK! \x1B[0m\n");
  });

  test("TYPESCRIPT - should create a new page", async () => {
    await fs.writeFileSync("temp_test/tsconfig.json", "");

    const cli = await exec(["page mypage"]);

    const isIndexCreated = await fs.existsSync(
      path.resolve("temp_test", "src", "pages", "mypage", "index.tsx")
    );
    const isSyleCreated = await fs.existsSync(
      path.resolve("temp_test", "src", "pages", "mypage", "styles.ts")
    );

    expect(isIndexCreated).toBeTruthy();
    expect(isSyleCreated).toBeTruthy();
    expect(cli.stdout).toBe("\x1B[32m OK! \x1B[0m\n");
  });

  test("TYPESCRIPT - should create a new page inside a module", async () => {
    await fs.writeFileSync("temp_test/tsconfig.json", "");

    const cli = await exec(["page mypage mymodule/mysubmodule"]);

    const isIndexCreated = await fs.existsSync(
      path.resolve(
        "temp_test",
        "src",
        "pages",
        "mymodule",
        "mysubmodule",
        "mypage",
        "index.tsx"
      )
    );
    const isSyleCreated = await fs.existsSync(
      path.resolve(
        "temp_test",
        "src",
        "pages",
        "mymodule",
        "mysubmodule",
        "mypage",
        "styles.ts"
      )
    );

    expect(isIndexCreated).toBeTruthy();
    expect(isSyleCreated).toBeTruthy();
    expect(cli.stdout).toBe("\x1B[32m OK! \x1B[0m\n");
  });
});
