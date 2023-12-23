var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var import_cors = __toESM(require("cors"));
var import_express = __toESM(require("express"));
var app = (0, import_express.default)();
var port = 5e3;
app.use((0, import_cors.default)({ origin: "http://localhost:5000" }));
app.get("/workspaces", (_, response) => {
  const workspaces = [
    { name: "web", version: "1.0.0" },
    { name: "server", version: "1.0.0" },
    { name: "ui", version: "1.0.0" },
    { name: "tsconfig", version: "1.0.0" },
    { name: "types", version: "1.0.0" }
  ];
  response.json({ data: workspaces });
});
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
