const campsitesURL = "./data/campsites.json";
const campsitesElement = document.querySelector("#campsites-grid");
const campsiteDetails = document.querySelector("#campsite-details");

const getCampsites = async () => {
  const response = await fetch(campsitesURL);
  if (response.ok) {
    let data = await response.json();
    displayCampsites(data.campsites);
  }
};

const displayCampsites = (campsites) => {
  campsites.forEach((campsite) => {
    let sectionItem = document.createElement("section");
    sectionItem.classList.add("card");

    let h2 = document.createElement("h2");
    h2.textContent = campsite.name;
    
    let content = document.createElement("div");
    content.classList.add("card-content")

    let figure = document.createElement("figure");
    let img = document.createElement("img");
    img.src = campsite.image;
    img.alt = `${campsite.name}`;
    img.loading = "lazy";

    let div = document.createElement("div");

    let p1 = document.createElement("p");
    p1.textContent = campsite.description;

    let address = document.createElement("address");
    address.textContent = campsite.address;

    let button = document.createElement("button");
    button.textContent = "Learn More";

    button.addEventListener("click", () => {
        displayCampsiteDetails(campsite);
    });

    figure.appendChild(img);

    div.appendChild(p1);
    div.appendChild(address);

    content.appendChild(figure);
    content.appendChild(div);
    content.appendChild(button);

    sectionItem.appendChild(h2);
    sectionItem.appendChild(content);

    campsitesElement.appendChild(sectionItem);
  });
};

function displayCampsiteDetails(campsite) {
    campsiteDetails.innerHTML = "";
    campsiteDetails.innerHTML = `
      <button id="closeModal">X</button>
      <h2>${campsite.name}</h2>
      <p>Status: ${campsite.status}</p>
      <hr>
      <h3>Perks: </h3>
    `;
  
    const perklist = document.createElement("ul");
    campsite.info.forEach((perk) => {
      let li = document.createElement("li");
      li.textContent = `${perk}.`;
      perklist.appendChild(li);
    });
  
    campsiteDetails.appendChild(perklist);
    campsiteDetails.showModal();
  
    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", () => {
      campsiteDetails.close();
    });
  
    campsiteDetails.addEventListener("click", function (event) {
      if (event.target === campsiteDetails) campsiteDetails.close();
    });
}

  
// First load
document.addEventListener("DOMContentLoaded", () => {
  getCampsites();
});
