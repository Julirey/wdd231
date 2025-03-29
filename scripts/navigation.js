// Hamburguer menu 
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("#animate-me");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});
