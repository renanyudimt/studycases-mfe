import { mount as mountProducts } from "productsApp/ProductsIndex";
import { mount as mountCart } from "cartApp/CartShow";

const elProducts = document.querySelector("#container-products");
const elCart = document.querySelector("#container-cart");

mountProducts(elProducts);
mountCart(elCart);

console.log(`Container is running in ${process.env.NODE_ENV} mode`);
