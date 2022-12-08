console.log('working')
const apiKey = 'QD79Eq35ArZVeHVjRTTzOqUOUsAWhocA'
const limit = 30
let imgeTitlePara = document.querySelector('.imge-title-para')
let cardContainer = document.querySelector('.card-container')
const imge = document.querySelector('.imge')
const btn = document.querySelector('.btn')
const formInput = document.querySelector('.search-input')
const numberInput = document.querySelector('.number-input')


btn.addEventListener('click', () => {
    if (formInput.value === '') {
        alert('Please enter a valid word')
    } else if (numberInput.value === '') {
        alert('Please enter a valid number')
    } else {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${formInput.value} &limit=${numberInput.value}`)
            .then((response) => response.json())
            .then((resultData) => {
                let dataArray = resultData.data
                dataArray.forEach(element => {
                    cardContainer.innerHTML += `<div class="imge">
          <img src="${element.images.original.url}" alt=""></img>
        </div>
        <div class="title-para">
          <p>${element.title}</p>
        </div>`
                });

            })
    }
})