import "../styles/style.css";
import { vinyls } from "./vinyls";
console.log(vinyls);

function createAlbum() {
    DOMSelectors.box.insertAdjacentHTML("beforeend",
  `<div class="create-album">
      <img src=${DOMSelectors.albumImage.value} alt="Album Cover" class="card-img">
      <h1 class="card-albumName">${DOMSelectors.albumName.value}</h1>
      <h2 class="card-release">${DOMSelectors.albumReleaseDate.value}</h2>
      <h3 class="card-artist">${DOMSelectors.albumArtist.value}</h3>
      <button class="delete">DELETE</button>
    </div>`);
}

createAlbum();
















