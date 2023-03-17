var ffi = require("ffi-napi");
var path = require("path");

var lib = ffi.Library(path.join(__dirname, "../target/release/libfibonacci"), {
  process: ["int", ["int", "int"]],
  fibonacci: ["int", ["int"]],
});

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
