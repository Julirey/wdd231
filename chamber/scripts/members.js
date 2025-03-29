const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const membersElement = document.querySelector("#members-grid");
const membersURL = "./data/members.json";

function showGrid() {
  membersElement.classList.add("grid");
  membersElement.classList.remove("list");
}

function showList() {
  membersElement.classList.add("list");
  membersElement.classList.remove("grid");
}

const getMembers = async () => {
  const response = await fetch(membersURL);
  if (response.ok) {
    let data = await response.json();
    displayMembers(data.members);
  }
};

const getMembership = (membership) => {
  let list = ["Member", "Silver", "Gold"];
  return list[membership - 1];
};

const displayMembers = (members) => {
  members.forEach((member) => {
    let sectionItem = document.createElement("section");
    sectionItem.classList.add("card");

    let img = document.createElement("img");
    img.src = member.logo;
    img.alt = `Logo of ${member.name}`;
    img.loading = "lazy";

    let h3 = document.createElement("h3");
    h3.textContent = member.name;

    let p1 = document.createElement("p");
    p1.textContent = member.address;

    let p2 = document.createElement("p");
    p2.textContent = member.phone;

    let link = document.createElement("a");
    link.href = "#";
    link.target = "_blank";
    link.text = member.url;

    let p3 = document.createElement("p");
    p3.textContent = getMembership(member.membership);

    sectionItem.appendChild(img);
    sectionItem.appendChild(h3);
    sectionItem.appendChild(p1);
    sectionItem.appendChild(p2);
    sectionItem.appendChild(link);
    sectionItem.appendChild(p3);

    membersElement.appendChild(sectionItem);
  });
};

gridButton.addEventListener("click", showGrid);
listButton.addEventListener("click", showList);

getMembers();
