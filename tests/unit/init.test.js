const configureRoom = require("../../bin/scripts/configure");
const fs = require("fs");
const path = require("path");

describe("init", () => {
  test("TYPESCRIPT - should restart src folder", async () => {
    fs.mkdirSync("src");
    fs.writeFileSync(path.join("src", "App.css"), "", { flag: "w" });
    fs.writeFileSync(path.join("src", "App.test.tsx"), "", { flag: "w" });
    fs.writeFileSync(path.join("src", "App.tsx"), "", { flag: "w" });
    fs.writeFileSync(path.join("src", "index.css"), "", { flag: "w" });
    fs.writeFileSync(path.join("src", "index.tsx"), "", { flag: "w" });
    fs.writeFileSync(path.join("src", "logo.svg"), "", { flag: "w" });
    fs.writeFileSync(path.join("src", "reportWebVitals.ts"), "", { flag: "w" });
    fs.writeFileSync(path.join("src", "setupTests.ts"), "", { flag: "w" });

    const isTypescript = true;
    configureRoom.configureSrc(isTypescript);

    expect(fs.existsSync(path.join("src", "App.css"))).toBe(false);
    expect(fs.existsSync(path.join("src", "App.test.tsx"))).toBe(false);
    expect(fs.existsSync(path.join("src", "index.css"))).toBe(false);
    expect(fs.existsSync(path.join("src", "logo.svg"))).toBe(false);
    expect(fs.existsSync(path.join("src", "reportWebVitals.ts"))).toBe(false);
    expect(fs.existsSync(path.join("src", "App.tsx"))).toBe(true);
    expect(fs.existsSync(path.join("src", "index.tsx"))).toBe(true);
  });

  test("JAVASCRIPT - should restart src folder", async () => {
    fs.mkdirSync("src");
    fs.writeFileSync(path.join("src", "App.css"), "", { flag: "w" });
    fs.writeFileSync(path.join("src", "App.test.js"), "", { flag: "w" });
    fs.writeFileSync(path.join("src", "App.js"), "", { flag: "w" });
    fs.writeFileSync(path.join("src", "index.css"), "", { flag: "w" });
    fs.writeFileSync(path.join("src", "index.js"), "", { flag: "w" });
    fs.writeFileSync(path.join("src", "logo.svg"), "", { flag: "w" });
    fs.writeFileSync(path.join("src", "reportWebVitals.js"), "", { flag: "w" });
    fs.writeFileSync(path.join("src", "setupTests.js"), "", { flag: "w" });

    const isTypescript = false;
    configureRoom.configureSrc(isTypescript);

    expect(fs.existsSync(path.join("src", "App.css"))).toBe(false);
    expect(fs.existsSync(path.join("src", "App.test.js"))).toBe(false);
    expect(fs.existsSync(path.join("src", "index.css"))).toBe(false);
    expect(fs.existsSync(path.join("src", "logo.svg"))).toBe(false);
    expect(fs.existsSync(path.join("src", "reportWebVitals.js"))).toBe(false);
    expect(fs.existsSync(path.join("src", "App.js"))).toBe(true);
    expect(fs.existsSync(path.join("src", "index.js"))).toBe(true);
  });
});
