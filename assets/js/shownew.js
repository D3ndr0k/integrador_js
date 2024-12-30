import { burgers } from "../../burgers.js";

const showCards = document.querySelector(".show-cards");

const renderProducts = (products) => {
  showCards.innerHTML = products
    .slice(0, 4)
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

renderProducts(burgers);
