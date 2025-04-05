const membersURL = "./data/members.json";
const spotlightsSection = document.querySelector("#spotlights-grid");

const getSpotlights = async () => {
  const response = await fetch(membersURL);
  if (response.ok) {
    let data = await response.json();
    const filtered = data.members.filter((member) => member.membership === 2 || member.membership === 3);
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const random = shuffled.slice(0, 3);
    displaySpotlights(random);
  }
};

const displaySpotlights = (members) => {
  members.forEach((member) => {
    let sectionItem = document.createElement("section");
    sectionItem.classList.add("card");
    
    let h2 = document.createElement("h2");
    h2.textContent = member.name;

    let div = document.createElement("div");
    div.classList.add("card-content")

    let img = document.createElement("img");
    img.src = member.logo;
    img.alt = `Logo of ${member.name}`;
    img.loading = "lazy";
    
    let div2 = document.createElement("div");

    let p1 = document.createElement("p");
    p1.innerHTML = `<strong>Phone: </strong>${member.phone}`;

    let p2 = document.createElement("p");
    p2.innerHTML = `<strong>Address: </strong>${member.address}`;
        
    let p3 = document.createElement("p");
    p3.innerHTML = `<strong>Website: </strong><a href="#" target="_blank">${member.url}</a>`;

    let p4 = document.createElement("p");
    p4.innerHTML = `<strong>Membership: </strong>${member.membership === 3 ? "Gold" : "Silver"}`;
    
    sectionItem.appendChild(h2);
    div.appendChild(img);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div2.appendChild(p4);
    div.appendChild(div2);
    sectionItem.appendChild(div);
    spotlightsSection.appendChild(sectionItem);
  });
};

getSpotlights();
