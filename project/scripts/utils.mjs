// To convert the first letter of a string to Uppercase
export function Upper(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// LocalStorage functions
export function setLocalStorage(array) {
  localStorage.setItem("catalogue", JSON.stringify(array));
}

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem("catalogue"));
}
