let barcode = "" // test barcode '5900541000017' żywiec zdrój 

const container = document.querySelector('.output')
const intput =  document.querySelector('.form-control')
let btn =  document.querySelector('.btn')

let brand = document.createElement('p')
brand.classList.add('brand')

container.after(brand)


btn.addEventListener('click', (e)=> {
    e.preventDefault();
    barcode = intput.value +""
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then(res => res.json())
    .then(res => {
        console.log(res.product.brands);
        brand.innerText = `BRAND of barcode product is ${res.product.brands}`
    })
})