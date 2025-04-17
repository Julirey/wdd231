const campsitesURL = "./data/campsites.json";
const campsiteselect = document.querySelector("#campsite");

const getCampsites = async () => {
    const response = await fetch(campsitesURL);
    if (response.ok) {
      let data = await response.json();
      displayCampsites(data.campsites);
    }
};

// Display campsites in dropdown menu
function displayCampsites(array) {
    array.forEach((campsite) => {
        if (campsite.status == "Available") {
            let option = document.createElement("option");
            option.value = campsite.name;
            option.textContent = campsite.name;
            campsiteselect.appendChild(option);
        }
    });
}

// Record the date when the form was loaded
const dateElement = document.querySelector("#date");
dateElement.value = Date.now();

// First load
document.addEventListener("DOMContentLoaded", () => {
  getCampsites();
});
