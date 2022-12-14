const fromRate = document.getElementById('from')
const toRate = document.getElementById('to')
const amount = document.getElementById('amount')
const btn = document.getElementById('btn')
const result = document.getElementById('result')
const getData = async() => {
    try {
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        const currencyData = await response.json();
        const currencyRate = Object.keys(currencyData.rates)
        currencyRate.map((ele) => {
            if (ele === 'EUR') {
                fromRate.innerHTML += `<option selected="selected" value="${ele}">${ele}</option>`
            } else {
                fromRate.innerHTML += `<option value="${ele}">${ele}</option>`
            }
            if (ele === 'DKK') {
                toRate.innerHTML += `<option selected="selected" value="${ele}">${ele}</option>`
            } else {
                toRate.innerHTML += `<option value="${ele}">${ele}</option>`
            }
        })
    } catch (err) {
        console.log(err.message);
    }
}
getData()

const calcData = async() => {
    try {
        const convertToValue = toRate.value
        const convertFromValue = fromRate.value
        const response = await fetch(`https://open.er-api.com/v6/latest/${fromRate.value}`);
        const data = await response.json();
        console.log(data.rates)
        const rateToValue = data.rates[convertToValue]
        const calcResult = rateToValue * amount.value
        const message = `${amount.value} ${convertFromValue} is ${calcResult} ${convertToValue}`
        console.log(message)
        result.innerHTML = `<p>${amount.value} ${convertFromValue} is ${calcResult} ${convertToValue}</p>`
    } catch (err) {
        console.log(err.message)
    }
}
btn.addEventListener('click', calcData)