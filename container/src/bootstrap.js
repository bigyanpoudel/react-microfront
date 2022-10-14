import { mount as productMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartDisplay";

console.log("Container");
productMount(document.querySelector("#root"));
cartMount(document.querySelector("#carts"));
