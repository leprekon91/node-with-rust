const { fibonacci } = require("./lib/index.js");

const n = 45;

console.time("js");
console.log(fibonacci.js(n));
console.timeEnd("js");

console.time("rust");
console.log(fibonacci.rust(n));
console.timeEnd("rust");
