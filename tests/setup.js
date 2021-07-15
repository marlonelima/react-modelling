const fs = require("fs");

beforeEach(async () => {
  await fs.promises.rm("src", { force: true, recursive: true });
  return await fs.promises.rm("tsconfig.json", {
    force: true,
    recursive: true,
  });
});

afterAll(async () => {
  await fs.promises.rm("src", { recursive: true, force: true });
  return await fs.promises.rm("tsconfig.json", {
    force: true,
    recursive: true,
  });
});
