import './styles/style.scss'

document.querySelector('#app').innerHTML = `
    <div class="container-sm text-center">
      <div class="row">
        <div class="col">
          <div>
            <label for="inputBarcode" class="form-label">Type your barcode</label>
            <input type="email" class="form-control" id="inputBarcode" aria-describedby="barcodeHelp" placeholder="5900541000017">
            <div id="barcodeHelp" class="form-text">for test purposes input only EAN-13 code</div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col output">
        </div>
      </div>
    </div>
`
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