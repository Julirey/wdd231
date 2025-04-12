const formResults = document.querySelector("#form-results")

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    formResults.innerHTML = `
    <p><strong>First Name: </strong>${params.get("fname")}</p>
    <p><strong>Last Name: </strong>${params.get("lname")}</p>
    <p><strong>Email: </strong>${params.get("email")}</p>
    <p><strong>Phone Number: </strong>${params.get("phone")}</p>
    <p><strong>Business Name: </strong>${params.get("business")}</p>
    <p><strong>Date Submitted: </strong>${new Date(parseInt(params.get("date"))).toISOString()}</p>
    `
});
