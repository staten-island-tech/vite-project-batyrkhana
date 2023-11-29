



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
  // returns an array/nodelist of buttons
  
  
  
  
  /*   filterClassicRock: function () {
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
    }, */
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
  