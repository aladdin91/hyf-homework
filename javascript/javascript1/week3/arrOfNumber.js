//Define an array of 5 items that are all numbers
const arrOfNumber = [1, 2, 3, 4, 5]
arrOfNumber

//Add one number at the end of the array
arrOfNumber.push(6)
arrOfNumber

//Add another number at the beginning of the array
arrOfNumber.unshift(0)

//Print out how many items you have in your array
arrOfNumber

//Remove the items you just added at the beginning and at the end
arrOfNumber.shift()
arrOfNumber
arrOfNumber.pop()
arrOfNumber

//Again print out how many items you have in your array with .length
console.log(arrOfNumber.length)

//Use the for loop to print out the items in your array
for (let i = 0; i < arrOfNumber.length; i++) {
    console.log(arrOfNumber[i])
}

// Use the for..of loop to print out the items in your array

for (let number of arrOfNumber) {
    console.log(number);
}
// Use the .toString() method to print out the items of your array
let numberToString = arrOfNumber.toString()
console.log(numberToString)

//Use the .join() method to print out the items in your array using ; as a separator
let arrOfJoin = arrOfNumber.join(';')

arrOfJoin

//(Bonus) Check if an item exists in your array with .includes()
if (arrOfJoin.includes(1)) {
    console.log('yes')
} else {
    console.log('no')
}