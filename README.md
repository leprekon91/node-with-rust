# node-with-rust
A short example using fibonacci calculation to compare Node.js vanilla js execution vs Node.js calling Rust compiled function.

## Installation
You will need Node.js and rust compiler installed!

1. `cd node-with-rust`
2. `cargo build --release` Compile the dynamic library
3. `npm install` Install npm dependencies
4. `npm run compare` run comparison of the fibonacci functions

Rust code can be found in `src/lib.rs`
Node code to load the dynamic library and the vanilla implementation of fibonacci is in `lib/index.js`
the comparison test can be found in `./compare.js`

By default the 45th number in the fibonacci sequence is calculated:

```
> node compare.js

1134903170
js: 6.285s
1134903170
rust: 1.661s
```