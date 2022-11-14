const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestWord(danishWords) {
    return danishWords.sort((a, b) => a.length - b.length)[0];
}


console.log(getShortestWord(danishWords))

const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

function charCount(string) {
    const åCount = string.match(/[å]/gi || []).length;
    const øCount = string.match(/[ø]/gi || []).length;
    const æCount = string.match(/[æ]/gi || []).length;
    return `å ${åCount} ø ${øCount} æ ${æCount}`
}
console.log(charCount(danishString))