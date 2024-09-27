import { useStore } from "~/store/store";
export const add = (product) => {
  const store = useStore();
  const item = toRaw(store.cart).find((el) => el.id == product.id);
  let index = store.cart.indexOf(item);
  if (store.cart[index].quantity < store.cart[index].productCount) {
    store.cart[index].quantity++;
  }
  localStorage.setItem("cart", JSON.stringify(store.cart));
};
