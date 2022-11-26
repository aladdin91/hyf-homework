console.log("Script loaded");

const products = getAvailableProducts();
const sec = document.querySelector('section');
const userInput = document.querySelector('.userInput')
const maxPrice = document.querySelector('.maxPrics');
const sortByPrice = document.querySelector('.sortPrice');

function renderProducts(products) {
    products.forEach(product => {
        const div = document.createElement("div");
        div.innerHTML = `
        <h1> prodouct: ${product.name}</h1>
        <p> price: ${ product.price } </p>
         <p> rating: ${ product.rating } </p>
         `
        sec.appendChild(div);
    });
}
renderProducts(products);

userInput.addEventListener('input', () => {
    const filterdProduct = products.filter(product => product.name.toLowerCase().includes(userInput.value));
    sec.innerHTML = ``;
    if (filterdProduct.length === 0) {
        sec.innerHTML = `<p> sorry  <em> (${userInput.value}) </em> not in the list </p>`;
    } else {
        renderProducts(filterdProduct);
    }
})

maxPrice.addEventListener('input', () => {
    const filterdProduct = products.filter(product => product.price <= maxPrice.value);
    sec.innerHTML = ``;
    if (maxPrice.value.length === 0) {
        renderProducts(products);
    } else {
        renderProducts(filterdProduct);
    }

})

sortByPrice.addEventListener('input', () => {

    if (sortByPrice.value === 'low') {
        const filterdProduct = products.sort((a, b) => a.price - b.price);
        sec.innerHTML = 'items filterd by lowest price';
        renderProducts(filterdProduct);
    } else {
        const filterdProduct = products.sort((a, b) => b.price - a.price);
        sec.innerHTML = 'items filterd by highst price';

        renderProducts(filterdProduct);
    }

})