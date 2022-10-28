for (let i = 10; i >= 0; i--) {
    if (i === 10) {
        console.log(` omg`)
        continue
    } else if (i === 0) {
        console.log(`its start`)
        continue
    }
    console.log(i)
}



const names = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce']

for (let i = 0; i < names.length; i++) {
    if (names[i].toLowerCase().includes('a')) {
        console.log(names[i])

    }
}

// Create an if sentence that will give a user a message based on his bank account balance. Use the balance variable and change that.

// If a user has 0 or less balance log out 'Please deposit some money!'
// If a user has more than 0 and at most 1000 log out 'Your balance is looking okay'
// If a user has more than 1000 and at most 3000 log out 'Your balance is looking good'
// If a user has more than 3000 and at most 10000 log out 'Your balance is fantastic'
// If a user has more than 10000 log out 'Your balance is AMAZING!'

const balance = 00
if (balance <= 0) {
    console.log('Please deposit some money!')
} else if (balance < 1000) {
    console.log('Your balance is looking okay')
} else if (balance < 3000) {
    console.log('Your balance is looking good')
} else if (balance < 10000) {
    console.log('Your balance is fantastic')
} else {
    console.log('Your balance is AMAZING!')
}



// Create a function called getCircleArea. It should have the radius of the circle as parameter and return the circle area. What happens if we dont return anything in the function?

function getCircleArea(radius) {
    return Math.PI * radius * radius

}
getCircleArea(3)


// Create a function called celciusToFahreneit it should have a parameter called celcius. It should return the temperature in fahrenheit.

function celciusToFahrenheit(celcius) {

    const calc = (celcius * 9 / 5) + 32

    return ` ${celcius} degrees celcius is: ${calc} degrees in Fahrenheit `

}

console.log(celciusToFahrenheit(3))


for (let i = 74; i < 98; i++) {
    console.log(i)
}


function reply(stringToLog, numberOfTimesToLog) {
    for (let i = 0; i < numberOfTimesToLog; i++) {
        console.log(stringToLog)
    }
}
reply('heloo', 5)


function sendEmailTo(recepient) {
    // But really it only logs out a string
    const email = recepient.split('|')
    for (let i = 0; i < email.length; i++) {
        console.log('email sent to ' + email[i]);
    }
}
sendEmailTo('benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com')
