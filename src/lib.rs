#[no_mangle]
pub extern fn fibonacci(x: i64) -> i64 {
    if x <= 2 {
        return 1;
    } else {
        return fibonacci(x - 1) + fibonacci(x - 2);
    }
}
