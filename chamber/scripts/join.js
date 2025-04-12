const membershipURL = "./data/membership.json";
const membershipElement = document.querySelector("#membership-list");
const membershipDetails = document.querySelector("#membership-details");

// Get memberships
const getMemberships = async () => {
  const response = await fetch(membershipURL);
  if (response.ok) {
    let data = await response.json();
    displayMemberships(data.memberships);
  }
};

// Display membership
function displayMemberships(memberships) {
  memberships.forEach((membership) => {
    const membershipCard = document.createElement("section");
    membershipCard.classList.add("card");

    const membershipContent = document.createElement("div");
    membershipContent.classList.add("membership-card");

    const h3 = document.createElement("h3");
    h3.textContent = `${membership.name} Membership Level`;

    const modalButton = document.createElement("button");
    modalButton.textContent = "Learn More";

    modalButton.addEventListener("click", () => {
      displayMembershipDetails(membership);
    });

    membershipContent.appendChild(h3);
    membershipContent.appendChild(modalButton);
    membershipCard.appendChild(membershipContent);
    membershipElement.appendChild(membershipCard);
  });
}

// Display membership details
function displayMembershipDetails(membership) {
  membershipDetails.innerHTML = "";
  membershipDetails.innerHTML = `
    <button id="closeModal">X</button>
    <h2>${membership.name} Membership</h2>
    <hr>
    <p><strong>${membership.price <= 0 ? "Free" : membership.price + "$/Month"}</strong></p>
    <h3>Benefits: </h3>
  `;

  const benefitList = document.createElement("ul");
  membership.benefits.forEach((benefit) => {
    let li = document.createElement("li");
    li.textContent = benefit;
    benefitList.appendChild(li);
  });

  membershipDetails.appendChild(benefitList);
  membershipDetails.showModal();

  const closeModal = document.getElementById("closeModal");
  closeModal.addEventListener("click", () => {
    membershipDetails.close();
  });

  membershipDetails.addEventListener("click", function (event) {
    if (event.target === membershipDetails) membershipDetails.close();
  });
}

// Record the date when the form was loaded
const dateElement = document.querySelector("#date");
dateElement.value = Date.now();

// First load
document.addEventListener("DOMContentLoaded", () => {
  getMemberships();
});
