import faker from "faker";

const mount = (el) => {
  let view = "";

  for (let i = 0; i < 5; i++) {
    view += `
    <div>
      <h3>${faker.commerce.productName()}</h3>
      <p>${faker.commerce.price()}</p>
      <p>${faker.commerce.productDescription()}</p>
    </div>
  `;
  }

  el.innerHTML = view;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  if (el) {
    mount(el);
  }
}

export { mount };
