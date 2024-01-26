/**
 * Write a function that returns the longest non-repeating substring for a string input.
 */
function longestNonrepeatingSubstring(str) {
    let result = "";
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (temp.includes(char)) {
            if (temp.length > result.length) {
                result = temp;
            }
            temp = "";
        }
        temp += char;
    }
    if (temp.length > result.length) {
        result = temp;
    }
    return result;
}

console.log("Result===", longestNonrepeatingSubstring("abcabcbb"));
console.log("Result===", longestNonrepeatingSubstring("aaaaaa"));
console.log("Result===", longestNonrepeatingSubstring("abcde"));
console.log("Result===", longestNonrepeatingSubstring("abcda"));
