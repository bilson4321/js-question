/**
 * Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. 
 * If there are no strings containing numbers, return an empty array.
 */
function numInStr(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        for (let j = 0; j < str.length; j++) {
            let char = str[j];
            if (char >= '0' && char <= '9') {
                result.push(str);
                break;
            }
        }
    }
    return result;
}

console.log("Result===", numInStr(["1a", "a", "2b", "b"]));
console.log("Result===",numInStr(["1a", "a", "2b", "b"]))
console.log("Result===",numInStr(["abc", "abc10"]))
console.log("Result===",numInStr(["abc", "ab10c", "a10bc", "bcd"]))
console.log("Result===",numInStr(["this is a test", "test1"]))
