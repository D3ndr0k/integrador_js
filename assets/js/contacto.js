const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;

  document.querySelectorAll(".error-message").forEach((el) => {
    el.textContent = "";
  });

  // Validar nombre
  const name = document.getElementById("name");
  if (name.value.trim() === "") {
    name.nextElementSibling.textContent = "El nombre es obligatorio.";
    isValid = false;
  }

  // Validar email
  const email = document.getElementById("email");
  if (email.value.trim() === "") {
    email.nextElementSibling.textContent =
      "El correo electrónico es obligatorio.";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    email.nextElementSibling.textContent =
      "El correo electrónico no es válido.";
    isValid = false;
  }

  // Validar teléfono
  const phone = document.getElementById("phone");
  if (phone.value && !/^\d{8,}$/.test(phone.value)) {
    phone.nextElementSibling.textContent =
      "El teléfono debe contener al menos 8 dígitos numéricos.";
    isValid = false;
  }

  if (isValid) {
    alert("Formulario enviado correctamente.");
    form.reset();
  }
});
