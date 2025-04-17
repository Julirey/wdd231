import { getLocalStorage, setLocalStorage, Upper } from "./utils.mjs"

const productsElement = document.querySelector("#products-grid");
const productsURL = "./data/products.json";

let productList = [];
let catalogueStorage = getLocalStorage() || [];

const getProducts = async () => {
  const response = await fetch(productsURL);
  if (response.ok) {
    let data = await response.json();
    productList = data.products;
    displayProducts(data.products);
  }
};

const displayProducts = (products) => {
    productsElement.innerHTML = "";
  products.forEach((product) => {
    let sectionItem = document.createElement("section");
    sectionItem.classList.add("card");

    let img = document.createElement("img");
    img.src = product.image;
    img.alt = `${product.name}`;
    img.loading = "lazy";
    let content = document.createElement("div");
    content.classList.add("card-content")
    let h2 = document.createElement("h2");
    h2.textContent = product.name;

    let p1 = document.createElement("p");
    p1.textContent = product.brand;

    let p2 = document.createElement("p");
    p2.textContent = Upper(product.category);

    let p3 = document.createElement("p");
    p3.textContent = `${product.price} $`;

    let button = document.createElement("button");
    button.textContent = `Add to list`;
    button.addEventListener("click", function () {
        catalogueStorage.push(product);
        setLocalStorage(catalogueStorage);
        button.classList.toggle("added")
        button.textContent = `Added to list`;
    });

    content.appendChild(img);
    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);
    content.appendChild(button);
    
    sectionItem.appendChild(h2);
    sectionItem.appendChild(content);
    productsElement.appendChild(sectionItem);
  });
};

// Sorter
const sortBy = (products) => {
    const filter = document.getElementById("PsortBy").value;
    switch (filter) {
      case "a-z":
        displayProducts(products.sort((a, b) => a.name.localeCompare(b.name)));
        break;
      case "z-a":
        displayProducts(products.sort((a, b) => -1 * a.name.localeCompare(b.name)));
        break;
      case "id-asc":
        displayProducts(products.sort((pokeA, pokeB) => pokeA.id - pokeB.id));
        break;
      case "id-desc":
        displayProducts(products.sort((pokeA, pokeB) => pokeB.id - pokeA.id));
        break;
      default:
        console.log("Invalid filter");
    }
};

// Event Listener
document.querySelector("#PsortBy").addEventListener("change", () => {sortBy(productList);});
document.querySelector("#PsortByType").addEventListener("change", () => {sortByType(productList);});
document.querySelector("#showFavorites").addEventListener("click", () => {
    if (catalogueStorage.length > 0) {
        displayProducts(catalogueStorage);
    } else {
        productsElement.innerHTML = `<p>No products have been added yet.</p>`;
    }
});
document.querySelector("#clearFavorites").addEventListener("click", () => {
    catalogueStorage = [];
    setLocalStorage(catalogueStorage);
    displayProducts(productList);
});

// Type Sorter
const sortByType = (products) => {
    const filter = document.getElementById("PsortByType").value;
    displayProducts(products.filter((product) => product.category == filter));
};

// First load
document.addEventListener("DOMContentLoaded", () => {
  getProducts();
});
