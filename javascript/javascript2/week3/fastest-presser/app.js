console.log('working')
const btn = document.querySelector('#btn')
const formInput = document.querySelector('.form-input')
const playerLSpan = document.querySelector('.playerL-span')
const playerSSpan = document.querySelector('.playerS-span')
const playerLDiv = document.querySelector('.playerL-details')
const playerSDiv = document.querySelector('.playerS-details')
const playerLResult = document.querySelector('.playerLResult')
const playerSResult = document.querySelector('.playerSResult')
const newGame = document.querySelector('.new-game')
const time = document.querySelector('.time')

let gameStart = false
let lCount = 0
let sCount = 0
let timer = formInput.value

const reset = () => {
    console.log('reset')
    playerLDiv.style.backgroundColor = `#FFFFFF`
    playerSDiv.style.backgroundColor = `#FFFFFF`
    playerLResult.innerHTML = `-`
    playerSResult.innerHTML = `-`
    lCount = 0
    sCount = 0
    playerSSpan.innerHTML = `S Count: 0`
    playerLSpan.innerHTML = `L Count: 0`
    time.innerHTML = `time`
}

function startCountdown(seconds) {
    const interval = setInterval(() => {
        time.innerHTML = `Game ends in ${seconds-1} second`
        seconds--;
        if (seconds < 1) {
            time.innerHTML = `Game Over`
            clearInterval(interval);
        }
    }, 1000);
}

const btnclick = () => {
    startCountdown(Number(formInput.value))
    gameStart = true
    console.log(`game starts for ${formInput.value} second`)
    if (formInput.value === '') {
        alert('please enter number of second')
    } else {
        document.addEventListener('keydown', event => {
            const key = event.key
                // console.log(key);
            console.log(formInput.value)
            if (key === 'l' && gameStart) {
                lCount++
                playerLSpan.innerHTML = `L Count: ${lCount}`
                console.log(lCount);
            } else if (key === 's' && gameStart) {
                sCount++
                playerSSpan.innerHTML = `L Count: ${sCount}`
                console.log(sCount);
            }
        });
    }
    setTimeout(() => {
        gameStart = false
        if (lCount === 0 && sCount === 0) {
            playerLResult.innerHTML = `nobody pressed the buttm`
            playerSResult.innerHTML = `nobody pressed the buttm`
        } else if (lCount > sCount) {
            console.log(`L pressd  ${lCount} and ${sCount} pressd so L won`)
            playerLDiv.style.backgroundColor = `#7ec384`
            playerSDiv.style.backgroundColor = `#F36654`
            playerLResult.innerHTML = `you won  🎉`
            playerSResult.innerHTML = `you lose 😞`
        } else if (lCount < sCount) {
            console.log(`L pressd  ${lCount} and ${sCount} pressd so s won`)
            playerLDiv.style.backgroundColor = `#F36654`
            playerSDiv.style.backgroundColor = `#7ec384`
            playerLResult.innerHTML = `you lose 😞`
            playerSResult.innerHTML = `you won  🎉`
        } else {
            playerLDiv.style.backgroundColor = '#C7BCA1';
            playerSDiv.style.backgroundColor = '#C7BCA1'
            playerLResult.innerHTML = `it's a draw 🙂`
            playerSResult.innerHTML = `it's a draw 🙂`
        }
        console.log('game ends')
        console.log(typeof Number(formInput.value))
    }, formInput.value * 1000)
}

btn.addEventListener('click', btnclick)
newGame.addEventListener('click', reset)