import faker from "faker";

const mount = (el) => {
  let products = `<div>YOu have ${faker.random.number()} items in your carts</div>`;

  el.innerHTML = products;
};

const isDev = process.env.NODE_ENV === "development";

if (isDev) {
  const el = document.querySelector("#carts");
  if (el) {
    mount(el);
  }
}
export { mount };
