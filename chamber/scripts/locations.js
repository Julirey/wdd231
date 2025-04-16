const locationsElement = document.querySelector("#locations-grid");
const locationsURL = "./data/locations.json";

const getLocations = async () => {
  const response = await fetch(locationsURL);
  if (response.ok) {
    let data = await response.json();
    displayLocations(data.locations);
  }
};

const displayLocations = (locations) => {
  locations.forEach((location) => {
    let sectionItem = document.createElement("section");
    sectionItem.classList.add("card");

    let h2 = document.createElement("h2");
    h2.textContent = location.name;
    
    let content = document.createElement("div");
    content.classList.add("card-content")

    let figure = document.createElement("figure");
    let img = document.createElement("img");
    img.src = location.image;
    img.alt = `${location.name}`;
    img.loading = "lazy";

    let div = document.createElement("div");

    let p1 = document.createElement("p");
    p1.textContent = location.description;

    let address = document.createElement("address");
    address.textContent = location.address;

    let button = document.createElement("button");
    button.textContent = "Learn More";

    figure.appendChild(img);

    div.appendChild(p1);
    div.appendChild(address);

    content.appendChild(figure);
    content.appendChild(div);
    content.appendChild(button);

    sectionItem.appendChild(h2);
    sectionItem.appendChild(content);

    locationsElement.appendChild(sectionItem);
  });
};

// First load
document.addEventListener("DOMContentLoaded", () => {
  getLocations();
});
