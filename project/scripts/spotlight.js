const campsiteURL = "./data/campsites.json";
const spotlightsSection = document.querySelector("#spotlight");

const getSpotlights = async () => {
  const response = await fetch(campsiteURL);
  if (response.ok) {
    let data = await response.json();
    shuffle(data.campsites);
    const random = data.campsites.slice(0, 2);
    displaySpotlights(random);
  }
};

const displaySpotlights = (campsite) => {
  campsite.forEach((campsite) => {
    let figureItem = document.createElement("figure");
    
    let img = document.createElement("img");
    img.src = campsite.image;
    img.alt = `${campsite.name}`;
    img.loading = "lazy";
    
    let figcaption = document.createElement("figcaption");
    figcaption.textContent = campsite.name;

    figureItem.appendChild(img);
    figureItem.appendChild(figcaption);
    spotlightsSection.appendChild(figureItem);
  });
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


// First load
document.addEventListener("DOMContentLoaded", () => {
    getSpotlights();
});
  