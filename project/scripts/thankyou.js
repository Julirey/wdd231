import { getLocalStorage } from "./utils.mjs";

const formResults = document.querySelector("#form-results")

let catalogueStorage = getLocalStorage() || [];
let message = "No products."

if (catalogueStorage.length > 0) {
    message = catalogueStorage.map(product => product.name).join(", ")
}

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    formResults.innerHTML = `
    <p><strong>First Name: </strong>${params.get("fname")}</p>
    <p><strong>Last Name: </strong>${params.get("lname")}</p>
    <p><strong>Email: </strong>${params.get("email")}</p>
    <p><strong>Phone Number: </strong>${params.get("phone")}</p>
    <p><strong>Campsite: </strong>${params.get("campsite")}</p>
    <p><strong>Products: </strong>${message}</p>
    <p><strong>Date Submitted: </strong>${new Date(parseInt(params.get("date"))).toISOString()}</p>
    `
});
