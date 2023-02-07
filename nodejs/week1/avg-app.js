const numbers = process.argv.slice(2).map(num => parseFloat(num));

if (numbers.length < 2) {
    console.log("Please provide at least tow number.");
    process.exit(1);
} else if (numbers.some(isNaN)) {
    console.log("arguments must be numbers.");
    process.exit(1);
} else {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    const avg = sum / numbers.length;
    console.log(avg);
}