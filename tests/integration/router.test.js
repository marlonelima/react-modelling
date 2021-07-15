const exec = require("../helpers/exec");
const fs = require("fs");

describe("page", () => {
  test("JAVASCRIPT - should init a new router", async () => {
    const cli = await exec(["router --init"]);

    const isRouterCreated = await fs.existsSync("src/routes/index.jsx");

    expect(isRouterCreated).toBeTruthy();
  });

  test("TYPESCRIPT - should init a new router", async () => {
    await fs.writeFileSync("tsconfig.json", "");

    const cli = await exec(["router --init"]);

    const isRouterCreated = await fs.existsSync("src/routes/index.tsx");

    expect(isRouterCreated).toBeTruthy();
  });
});
