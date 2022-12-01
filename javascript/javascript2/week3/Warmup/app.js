console.log('working')

//Log out the text "Called after 2.5 seconds" 2.5 seconds after the script is loaded.
const textDelay = () => {
    setTimeout(() => {
        console.log('Called after 2.5 seconds')
    }, 2500)
}
textDelay()


//Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.
const anotherTextDelay = (time, string) => {
    setTimeout(() => {
        console.log(`string ${string} Called after ${time} seconds`)
    }, time * 1000);
}
anotherTextDelay(5, 'hello world')

anotherTextDelay(3, 'hello world')


//Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
const btnDelayText = document.querySelector('.btnDelayText')
btnDelayText.addEventListener('click', () => {
    setTimeout(() => {
        console.log('Called after 5 seconds')
    }, 5000)
})

//Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.
const logsEarth = () => {
    console.log('Earth ')
}
const logsSaturn = () => {
    console.log('Saturn')
}
const planetLogFunction = (logging) => {
    return logging
}
planetLogFunction(logsEarth())
planetLogFunction(logsSaturn())

//Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api
const btn = document.querySelector('#btn')
const para = document.querySelector('p')
let findMe = () => {
    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log('clicked')
        para.innerText = `lat ${latitude} .. ${longitude}`
    }
    const error = () => {
        para.innerText = 'Unable to retrieve your location'
    }

    navigator.geolocation.getCurrentPosition(success, error);

}
btn.addEventListener('click', findMe)

//Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions
const runAfterDelay = (Delay, callbackfunc) => {
    setTimeout(() => {
        return callbackfunc();
    }, Delay * 1000);
};

runAfterDelay(2, (firstCallBackFunc) => {
    console.log('first CallBack Function called after 2 sec');
});
runAfterDelay(6, (secendCallBackFunc) => {
    console.log('secend CallBack Function called after 6 sec');
});


//Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"
window.addEventListener('dblclick', () => {
    console.log('double click!')
})

//Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.
const logFunnyJoke = () => {
    console.log('pretend this is a funny joke')
};
const logBadJoke = () => {
    console.log('pretend this is a bad joke')
};

const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
    shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
};

jokeCreator(false, logFunnyJoke, logBadJoke)
jokeCreator(true, logFunnyJoke, logBadJoke)

//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const arrayOfFunctions = [
    () => {
        return 'first function'
    },
    () => {
        return 'secend function'
    },
    () => {
        return 'third function'
    },
];


arrayOfFunctions.forEach(element => console.log(element()))


// Create a function as a const and try creating a function normally. Call both functions.
console.log(secendfunction())
const firstFuction = () => {
    return 'first function expression'
};

function secendfunction() {
    return 'secend function declaration'
}

console.log(firstFuction())

//Create an object that has a key whose value is a function. Try calling this function.
const cat = {
    name: 'Fluffy',
    age: 2,
    sound: () => {
        console.log('meow');
    },
};

cat.sound();