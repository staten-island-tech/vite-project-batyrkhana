import "../styles/style.css";
import { DOMSelectors } from "./Dom";
import { vinyls } from "./vinyls";
// import { domSelectors } from "./Dom";

const createProduct = function(vinyls) {
  vinyls.forEach((vinyl) => DOMSelectors.products.insertAdjacentHTML("beforeend",
  ` <div class="product" id="products-all">
    <img src="${vinyl.img}" alt="This is an image of ${vinyl.title}." class="product-img">
    <h5 class="product-title">${vinyl.title}</h5>
    <h6 class="product-vinylType">${vinyl.vinylType}</h6>
    <h6 class="product-artist">${vinyl.artist}</h6>
    <h6 class="product-genre">${vinyl.genre}</h6>
    <h5 class="product-price">${vinyl.price}</h5>
    </div>
    `)
  );
}

createProduct(vinyls);












