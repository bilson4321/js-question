/**
 * Additive Persistence
 */
function additivePersistance(num) {
    if (num < 0) return 0;
    let count = 0;
    while (num > 9) {
        num = num.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
        count++;
    }
    return count;
}

console.log("Result===", additivePersistance(1679583));
console.log("Result===", additivePersistance(123456));
console.log("Result===", additivePersistance(6));

/**
 * Multiplicative Persistence
 */
function multiplicativePersistence(num) {
    if (num < 0) return 0;
    let count = 0;
    while (num > 9) {
        num = num.toString().split('').reduce((a, b) => parseInt(a) * parseInt(b));
        count++;
    }
    return count;
}

console.log("Result===", multiplicativePersistence(77));
console.log("Result===", multiplicativePersistence(123456));
console.log("Result===", multiplicativePersistence(4));