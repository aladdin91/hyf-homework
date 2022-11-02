const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];

function removeNames(inputName) {
    if (typeof inputName !== 'string' || inputName === '') {
        console.log(`please enter a valid name`)
    } else if (names.includes(inputName)) {
        for (let i = 0; i < names.length; i++) {
            if (names[i] === inputName) {
                const nameRemoved = names.splice(i, 1);
                console.log(`you removed ${nameRemoved} and the list contain ${names} `)
            }
        }
    } else {
        console.log(`${inputName} not in the list`)
    }
}
removeNames('Ahmad')