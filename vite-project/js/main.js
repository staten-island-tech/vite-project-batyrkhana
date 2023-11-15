import "../styles/style.css";
import { vinyls } from "./vinyls";
import { domSelectors } from "./Dom";
console.log(vinyls);

const createItem = function(vinyls) {
    Dom.products.insertAdjacentHTML("beforeend",
  `<div class="create-album">
      <img src=${vinyls.vinylURL} alt="Album Cover" class="card-img">
      <h1 class="card-albumName">${vinyls.title}</h1>
      <h2 class="card-vinylType">${vinyls.vinylType}</h2>
      <h3 class="card-artist">${vinyls.artist}</h3>
      <button class="delete">DELETE</button>
    </div>`);
}
















