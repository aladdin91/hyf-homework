let cat = {
    name: 'Bertie',
    breed: 'Cymric',
    color: 'white',
    greeting: function() {
        return 'Meow!'
    }
}

// 1. Create a variable catName, use bracket notation to get the value of the 'name' property of cat
const catName = cat['name']
console.log(catName)

// 2. Run the greeting() method using dot notation (it will log the greeting to the browser DevTools' console).
console.log(cat.greeting())
    // 3. Update the color property value to black.
cat.color = 'black'
console.log(cat.color)

const classMate = [{
    name: 'kabeer',
    age: 18
}, {
    name: 'mehemt',
    age: 18
}, {
    name: 'vip',
    age: 18
}, ]


function isNameExist(name) {
    for (let i = 0; i < classMate.length; i++) {
        if (classMate[i].name === name) {
            return true
        }
    }
    return false
}

const result = isNameExist('mehemt')
result