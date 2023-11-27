import "../styles/style.css";
import { DOMSelectors } from "./Dom";
import { vinyls } from "./vinyls";

// 1. Create Starting Array

const VinylCreate = function(vinyls) {
  DOMSelectors.products.insertAdjacentHTML("beforeend",
  ` <div class="product" id="products-all">
    <img src="${vinyls.img}" alt="This is an image of ${vinyls.title}." class="product-img">
    <h5 class="product-title">${vinyls.title}</h5>
    <h6 class="product-vinylType">${vinyls.vinylType}</h6>
    <h6 class="product-artist">${vinyls.artist}</h6>
    <h6 class="product-genre">${vinyls.genre}</h6>
    <h5 class="product-price">$${vinyls.price}</h5>
    </div>
    `)
};
console.log(vinyls);
vinyls.forEach((vinyl)=>VinylCreate(vinyl));

// 2. Changes the Theme from Dark Mode to Light Mode

DOMSelectors.changeTheme.addEventListener ("click", function(){
  if (document.body.classList.contains("light")) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      document.body.mainbuttons
  } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
  }
});


// 3. Framework for what each element in an array is supposed to look like

const filteredArray = function () {
  vinyls.map((vinyl) => ({
    title: vinyl.title,
    vinylType: vinyl.vinylType,
    artist: vinyl.artist,
    price: vinyl.price,
    genre: vinyl.genre,
    img: vinyl.img,
  }))
};

// 4. Deletes array

const deleteVinyl = function () {
  document.querySelectorAll("#products-all")
  .forEach((vinyl) => vinyl.remove());
};

const productFilters = {
  filterAllVinyls: function () {
    DOMSelectors.allVinyls.addEventListener("click", function () {
      deleteVinyl();
      filteredArray();
      vinyls.forEach((vinyl) => {
        console.log(`${vinyl.title} by ${vinyl.artist}`);
        VinylCreate(vinyl);
      });
    });
  },
  filterClassicRock: function () {
    DOMSelectors.classicRock.addEventListener("click", function () {
      deleteVinyl();
      filteredArray();
      vinyls.filter((vinyl) => vinyl.genre.includes("Classic Rock")).forEach((vinyl) => {
        console.log(`${vinyl.title} by ${vinyl.artist}`);
        VinylCreate(vinyl);
      });
    });
  },
  filterCountry: function () {
    DOMSelectors.country.addEventListener("click", function () {
      deleteVinyl();
      filteredArray();
      vinyls.filter((vinyl) => vinyl.genre.includes("Country")).forEach((vinyl) => {
        console.log(`${vinyl.title} by ${vinyl.artist}`);
        VinylCreate(vinyl);
      });
    });
  },
  filterHilo: function () {
    DOMSelectors.priceHighLo.addEventListener("click", function () {
      deleteVinyl();
      filteredArray();
      vinyls.sort((a, b) => b.price - a.price).forEach((vinyl) => {
        console.log(`${vinyl.title} by ${vinyl.artist}, ${vinyl.price}`);
        VinylCreate(vinyl);
      });
    });
  },
  filterLohi: function () {
    DOMSelectors.priceLowHi.addEventListener("click", function () {
      deleteVinyl();
      filteredArray();
      vinyls.sort((a, b) => a.price - b.price).forEach((vinyl) => {
        console.log(`${vinyl.title} by ${vinyl.artist}, ${vinyl.price}`);
        VinylCreate(vinyl);
      });
    });
  },
};

productFilters.filterAllVinyls();
productFilters.filterClassicRock();
productFilters.filterCountry();
productFilters.filterHilo();
productFilters.filterLohi();