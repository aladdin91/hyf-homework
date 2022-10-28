function whatToWear(temp) {
    if (temp <= 10) {
        console.log(`temperature is ${temp} wear winter jacket`);
    } else if (temp <= 20) {
        console.log(`temperature is ${temp} wear autumn clothe`)
    } else {
        console.log(`temperature is ${temp} wear summer clothe`)
    }
}

whatToWear(1)