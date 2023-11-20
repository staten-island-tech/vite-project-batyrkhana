import "../styles/style.css";
import { DOMSelectors } from "./Dom";
import { vinyls } from "./vinyls";

// 1. Creates a vinyl card

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
  )
};
console.log(vinyls);
createProduct(vinyls);

// 2. Changes the Theme from Dark Mode to Light Mode

DOMSelectors.changeTheme.addEventListener ("click", function(){
  console.log("works")
  if (document.body.classList.contains("light")) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
  }
  else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
  }
});
// 3. Creates a map array for each 
const mapVinyls = function () {
  vinyls.map((vinyl)=> ({
    title: vinyl.title,
    vinylType: vinyl.vinylType,
    artist: vinyl.artist,
    price: vinyl.price,
    genre: vinyl.genre,
    img: vinyl.img,
  }))
};
console