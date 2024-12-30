import { burgers } from "../../burgers.js";

const productDetails = document.querySelector("#product-details");

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const product = burgers.find((burger) => burger.id === parseInt(productId));

if (product) {
  productDetails.innerHTML = `
    <div>
      <img src="${product.img}" alt="${product.name}" />
      <h2>${product.name}</h2> 
      <span>$${product.price}</span>
      <button class="add-to-cart" id="${product.id}">Agregar al carrito</button>
      <p>${product.description}</p>
    </div>
  `;

  const addToCartButton = document.querySelector(".add-to-cart");

  addToCartButton.addEventListener("click", () => {
    addToCart(product);
  });
} else {
  productDetails.innerHTML = `<p>Producto no encontrado.</p>`;
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} fue agregado al carrito.`);
}
