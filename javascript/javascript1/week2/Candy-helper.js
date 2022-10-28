const candyTable = {
    sweet: 0.5,
    chocolate: 0.7,
    toffee: 1.1,
    chewingGum: 0.03,
}
let boughtCandyPrices = [];
const yourLimit = Math.floor(Math.random() * 100);
let youBalance = 0;

function canBuyMoreCandy() {
    for (i = 0; i < boughtCandyPrices.length; i++) {
        youBalance += boughtCandyPrices[i]
    }

    if (youBalance < yourLimit) {
        return true
    } else {
        return false
    }

}

function addCandy(candyType, weight) {
    if (canBuyMoreCandy) {
        if (candyType === 'sweet') {
            boughtCandyPrices.push(candyTable.sweet * weight)
            console.log(boughtCandyPrices)
        } else if (candyType === 'chocolate') {
            boughtCandyPrices.push(candyTable.chocolate * weight)
            console.log(boughtCandyPrices)
        } else if (candyType === 'toffee') {
            boughtCandyPrices.push(candyTable.toffee * weight)
            console.log(boughtCandyPrices)
        } else if (candyType === 'chewingGum') {
            boughtCandyPrices.push(candyTable.chewingGum * weight)
            console.log(boughtCandyPrices)
        } else {
            console.log(`${candyType} not exist in our store`)
        }
    } else {
        console.log(`no more candy for you`)
    }
}


addCandy('seet', 20)
addCandy('chocolate', 20)

addCandy('sweet', 20)


canBuyMoreCandy()