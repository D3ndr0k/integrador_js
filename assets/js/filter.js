import { burgers } from "../../burgers.js";

const categorySelect = document.querySelector("#category");
const showCards = document.querySelector(".show-cards");

const renderProducts = (products) => {
  showCards.innerHTML = products
    .map(
      (product) => `
      <a class="limpio" href="product.html?id=${product.id}">
        <div class="card">
           <picture>
             <img src="${product.img}" alt="${product.name}" class="card-image" />
             </picture>
             <div>
            <h4 class="card-title">${product.name}</h4>
            <span class="card-price">$${product.price}</span>
            </div>
        </div>
      </a>`
    )
    .join("");
};

const urlParams = new URLSearchParams(window.location.search);
const categoryParam = urlParams.get("category");

let filteredProducts;

if (categoryParam && categoryParam !== "all") {
  filteredProducts = burgers.filter(
    (burger) => burger.category === categoryParam
  );
  categorySelect.value = categoryParam;
} else {
  filteredProducts = burgers;
}

renderProducts(filteredProducts);

categorySelect.addEventListener("change", ({ target: { value } }) => {
  renderProducts(
    value === "all"
      ? burgers
      : burgers.filter((burger) => burger.category === value)
  );
});
