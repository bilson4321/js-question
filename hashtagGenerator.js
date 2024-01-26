/**
 * Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. 
 * If multiple words tie for the same length, retrieve the word that occurs first.
 */
function getHashTags(str) {
    let words = str.split(" ");
    words.sort((a, b) => b.length - a.length);
    return words.map(word => "#" + word.toLowerCase()).slice(0, 3);
}

console.log("Result===", getHashTags("How the Avocado Became the Fruit of the Global Trade"));
console.log("Result===", getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"));
console.log("Result===", getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));
console.log("Result===", getHashTags("Visualizing Science"));