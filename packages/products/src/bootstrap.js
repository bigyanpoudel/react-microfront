import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

const isDev = process.env.NODE_ENV === "development";

if (isDev) {
  const el = document.querySelector("#root");
  if (el) {
    mount(el);
  }
}
export { mount };
