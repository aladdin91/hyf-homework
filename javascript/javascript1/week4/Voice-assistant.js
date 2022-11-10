let userName = ''
let toDo = []



function showToDo() {
    let toDoList = ''
    for (let i = 0; i < toDo.length; i++) {
        toDoList += `${toDo[i]} `;
    }
    return `You have ${toDo.length} todos: ${toDoList}`
}

function getReply(str) {
    if (str === 'What is my name' && userName.length === 0) {
        return `you don't give me a name`
    } else if (typeof str === 'string' && str.includes('my name is ') && userName.length === 0) {
        const name = str.split(' ').pop()
        userName = name
        return `Nice to meet you ${name}`
    } else if (str === 'What is my name' && userName.length > 1) {
        return `Your name is ${userName} `
    } else if (typeof str === 'string' && str.includes('my name is ') && userName.length > 1) {
        return `yes i already got your name`
    } else if (str.includes('Add')) {
        const regEx = (/(?<=Add )(.*)(?= to )/)
        const toDoReg = regEx.exec(str)
        toDo.push(toDoReg[0])
        return `${toDoReg[0]} add to yor todo list`
    } else if (str.includes('on my todo')) {
        return showToDo()
    } else if (str.includes('Remove')) {
        const regEx = (/(?<=Remove )(.*)(?= from )/)
        const removeToDo = regEx.exec(str)
        const newList = toDo.filter(item => item !== removeToDo[0])
        toDo = newList
        return `${removeToDo[0]} removed from your todo list, you todo now is ${newList} `
    } else if (str.includes('is it today')) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        const todayDate = today.toLocaleDateString("en-US", options)
        return `today is: ${todayDate}`
    } else if (str.includes('what is')) {
        const regexNumber = /is\s(\d+)/
        const firstNum = regexNumber.exec(str)
        const firstNumberStr = Number(firstNum[1])
        const secendNum = str.match(/[0-9]+$/);
        const secendNumberStr = Number(secendNum[0], 10);
        const math = str.split(' ')
        const result = `${firstNumberStr} ${math[3]} ${secendNumberStr}`
        return eval(result)
    } else if (str.includes('Set a timer')) {
        const numberOfMinutes = str.match(/\d/);
        setTimeout(function() {
            console.log('timer is done')
        }, numberOfMinutes[0] * 60000)

        return `timer set for ${numberOfMinutes[0]} minutes`


    } else {
        return `something went wrong`
    }

}


console.log(getReply('What is my name'))

console.log(getReply('Hello my name is Benjamin'))

console.log(getReply('Add fishing to my todo'))
console.log(getReply('Add singing in the shower to my todo'))
console.log(getReply('Add study to my todo'))

console.log(getReply('What is on my todo? '))

console.log(getReply('what is 3 + 30'))
console.log(getReply('What day is it today?'))




console.log(getReply('Remove fishing from my todo '))
console.log(getReply('Remove singing in the shower from my todo '))