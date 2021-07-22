(() => {
  const form = document.forms.grocery;

  const createItem = (value) => {
    const div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = value;

    return div;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const itemField = form.querySelector("[name=item]");
    const alertContainer = document.querySelector(".alert");

    const isValid = itemField.value.trim() !== "";

    if (isValid) {
      alertContainer.classList.add("valid");
      alertContainer.innerHTML = "Adicionado corretamente";

      const items = document.querySelector(".items");
      const child = createItem(itemField.value);

      child.addEventListener("click", () => {
        if (child.classList.contains('clicked')) {
          items.removeChild(child);
        } else {
          child.classList.add('clicked');
        }
      });

      items.appendChild(child);
      itemField.value = "";

      setTimeout(clearAlert, 2000);
    } else {
      alertContainer.classList.add("invalid");
      alertContainer.innerHTML = "Preencha o campo de item";
    }
  });

  const clearAlert = () => {
    const alertContainer = document.querySelector(".alert");

    alertContainer.classList.remove("valid", "invalid");
    alertContainer.innerHTML = null;
  };
})();
