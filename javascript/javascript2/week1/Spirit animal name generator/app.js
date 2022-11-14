const animalsList = ['Powerful  bear', 'Goal-oriented falcon', 'Pride lion', 'Bold Monkey', 'Wisdom Owl', 'Patience Spider', 'transformation Butterfly', 'Quick thinking Cheetah', 'Magic cat', 'caring deer']

const btn = document.querySelector('#btn');
const input = document.querySelector('#input');
const resetBtn = document.querySelector('#resetBtn');


const result = document.querySelector('#result');
btn.addEventListener('click', function() {
    if (input.value.length === 0) {
        const para = document.createElement('p')
        para.innerText = 'please enter a name first'
        result.appendChild(para)
    } else {
        const randomNumber = Math.floor(Math.random() * 9 + 1);
        const para = document.createElement('p')
        para.innerText = `${input.value} - ${animalsList[randomNumber]}`
        result.appendChild(para)
    }
})
resetBtn.addEventListener('click', function() {
    result.innerText = ''

})