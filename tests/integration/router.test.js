const exec = require("../helpers/exec");
const fs = require("fs");
const path = require("path");

describe("page", () => {
  test("JAVASCRIPT - should init a new router", async () => {
    const cli = await exec(["router --init"]);

    const isRouterCreated = await fs.existsSync(
      path.resolve("temp_test", "src", "routes", "index.jsx")
    );

    expect(isRouterCreated).toBeTruthy();
    expect(cli.stdout).toBe("\x1B[32m OK! \x1B[0m\n");
  });

  test("TYPESCRIPT - should init a new router", async () => {
    await fs.writeFileSync("temp_test/tsconfig.json", "");

    const cli = await exec(["router --init"]);

    const isRouterCreated = await fs.existsSync(
      path.resolve("temp_test", "src", "routes", "index.tsx")
    );

    expect(isRouterCreated).toBeTruthy();
    expect(cli.stdout).toBe("\x1B[32m OK! \x1B[0m\n");
  });
});
