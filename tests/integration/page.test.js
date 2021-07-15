const exec = require("../helpers/exec");
const fs = require("fs");

describe("page", () => {
  test("JAVASCRIPT - should create a new page", async () => {
    const cli = await exec(["page mypage"]);

    const isIndexCreated = await fs.existsSync("src/pages/mypage/index.jsx");
    const isSyleCreated = await fs.existsSync("src/pages/mypage/styles.js");

    expect(isIndexCreated).toBeTruthy();
    expect(isSyleCreated).toBeTruthy();
  });

  test("JAVASCRIPT - should create a new page inside a module", async () => {
    const cli = await exec(["page mypage -m mymodule"]);

    const isIndexCreated = await fs.existsSync(
      "src/pages/mymodule/mypage/index.jsx"
    );
    const isSyleCreated = await fs.existsSync(
      "src/pages/mymodule/mypage/styles.js"
    );

    expect(isIndexCreated).toBeTruthy();
    expect(isSyleCreated).toBeTruthy();
  });

  test("TYPESCRIPT - should create a new page", async () => {
    await fs.writeFileSync("tsconfig.json", "");

    const cli = await exec(["page mypage"]);

    const isIndexCreated = await fs.existsSync("src/pages/mypage/index.tsx");
    const isSyleCreated = await fs.existsSync("src/pages/mypage/styles.ts");

    expect(isIndexCreated).toBeTruthy();
    expect(isSyleCreated).toBeTruthy();
  });

  test("TYPESCRIPT - should create a new page inside a module", async () => {
    await fs.writeFileSync("tsconfig.json", "");

    const cli = await exec(["page mypage -m mymodule"]);

    const isIndexCreated = await fs.existsSync(
      "src/pages/mymodule/mypage/index.tsx"
    );
    const isSyleCreated = await fs.existsSync(
      "src/pages/mymodule/mypage/styles.ts"
    );

    expect(isIndexCreated).toBeTruthy();
    expect(isSyleCreated).toBeTruthy();
  });

  test("TYPESCRIPT - should create a new page inside a module", async () => {
    await fs.writeFileSync("tsconfig.json", "");

    const cli = await exec(["page mypage -m mymodule"]);

    const isIndexCreated = await fs.existsSync(
      "src/pages/mymodule/mypage/index.tsx"
    );
    const isSyleCreated = await fs.existsSync(
      "src/pages/mymodule/mypage/styles.ts"
    );

    expect(isIndexCreated).toBeTruthy();
    expect(isSyleCreated).toBeTruthy();
  });
});
