const fs = require("fs");

beforeEach(() => {
  fs.rmSync("src", { force: true, recursive: true });
  fs.rmSync("tsconfig.json", { force: true, recursive: true });
});

afterAll(() => {
  fs.rmSync("src", { recursive: true, force: true });
  fs.rmSync("tsconfig.json", { force: true, recursive: true });
});
