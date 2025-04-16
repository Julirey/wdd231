const welcomeDisplay = document.querySelector("#visits-message");

let numVisits = Number(window.localStorage.getItem("visits"));
let lastVisit = Number(window.localStorage.getItem("lastVisit"));

// Set variables 
const msToDays = 84600000;
const today = Date.now();

// Set message
let lastVisitDays = ((today - lastVisit) / msToDays).toFixed(0);
let dayVersion = lastVisitDays == 1 ? "day" : "days";

if (numVisits === 0) {
    welcomeDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else if (lastVisitDays < 1) {
    welcomeDisplay.textContent = "Back so soon! Awesome!";
} else {
    welcomeDisplay.textContent = `You last visited ${lastVisitDays} ${dayVersion} ago`;
}

// Set localStorage
numVisits++;
localStorage.setItem("visits", numVisits);
localStorage.setItem("lastVisit", today);