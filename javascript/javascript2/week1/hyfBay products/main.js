console.log("Script loaded");
const ulList = document.querySelector('#ulList')

const products = getAvailableProducts();
products.forEach(product => {
    const li = document.createElement('li')
    li.innerHTML = `
    <h2> prodouct: ${product.name}</h2>

    <p> price: ${product.price} </p>
    <p> rating: ${product.rating} </p>

    `
    ulList.appendChild(li)
    console.log(product)
});