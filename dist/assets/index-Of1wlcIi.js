(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
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
`;let s="";const l=document.querySelector(".output"),a=document.querySelector(".form-control");let u=document.querySelector(".btn"),c=document.createElement("p");c.classList.add("brand");l.after(c);u.addEventListener("click",n=>{n.preventDefault(),s=a.value+"",fetch(`https://world.openfoodfacts.org/api/v0/product/${s}.json`).then(r=>r.json()).then(r=>{console.log(r.product.brands),c.innerText=`BRAND of barcode product is ${r.product.brands}`})});
