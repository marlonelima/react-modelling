const fs = require("fs");

beforeAll(() => {
  fs.mkdirSync("temp_test", { force: true, recursive: true });
});

beforeEach(() => {
  fs.rmSync("temp_test/src", { force: true, recursive: true });
  fs.rmSync("tsconfig.json", { force: true, recursive: true });
});

afterAll(() => {
  fs.rmSync("temp_test/src", { recursive: true, force: true });
  fs.rmSync("tsconfig.json", { force: true, recursive: true });
  fs.rmSync("temp_test", { recursive: true, force: true });
});
