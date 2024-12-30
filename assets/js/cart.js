const cartItemsContainer = document.querySelector("#cart-items");
const cartTotalElement = document.querySelector("#cart-total");
const checkoutButton = document.querySelector("#checkout-button");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const renderCart = () => {
  cartItemsContainer.innerHTML = cart.length
    ? cart
        .map(
          (product, index) => `
      <div class="cart-item">
        <img src="${product.img}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
        <span class="cart-item-remove" data-index="${index}">X</span>
      </div>
    `
        )
        .join("")
    : "<p>Tu carrito está vacío.</p>";

  const total = cart.reduce((sum, product) => sum + product.price, 0);
  cartTotalElement.textContent = `$${total.toFixed()}`;
};

cartItemsContainer.addEventListener("click", ({ target }) => {
  if (target.classList.contains("cart-item-remove")) {
    cart.splice(target.dataset.index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
});

checkoutButton.addEventListener("click", () => {
  if (!cart.length) return alert("Tu carrito está vacío.");
  alert("Compra realizada con éxito.");
  localStorage.removeItem("cart");
  cart.length = 0;
  renderCart();
});

renderCart();
