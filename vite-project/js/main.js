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

//get all buttons for genre filter as array/nodelist
let buttons = document.querySelectorAll(".genre-button")
//add click handler for each button
buttons.forEach((btn)=> btn.addEventListener("click", 

function(vinyl){
  //if btn == buttons[0] then call all vinyl
  //gets textcontent of clicked button
  deleteVinyl(vinyl);
  let filter = btn.textContent
  filteredArray(vinyl);
  if (btn == buttons[0]) {
    vinyls.forEach((vinyl) => {VinylCreate(vinyl)})
  } else if (btn == buttons[4]) {
    vinyls.sort((a, b) => b.price - a.price).forEach((vinyl) => VinylCreate(vinyl))
  }
    
  vinyls.filter((vinyl) => vinyl.genre.includes(filter)).forEach((vinyl)=>VinylCreate(vinyl));

  // filter the vinyl array based on the button clicked (filter)

  
  
}


));
