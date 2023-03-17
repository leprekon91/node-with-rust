const ffi = require("ffi-napi");
const path = require("path");

// load rust dynamic library
const lib = ffi.Library(
  path.join(__dirname, "../target/release/libfibonacci"),
  { fibonacci: ["int", ["int"]] }
);

// Vanilla JS implementation
function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

module.exports.fibonacci = {
  js: fibonacci,
  rust: lib.fibonacci,
};
