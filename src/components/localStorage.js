const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return [];
};

const saveDataToLocalStorage = (cart) => {
  const stringData = JSON.stringify(cart);
  localStorage.setItem("cart", stringData);
};
const addItemLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  const newCart = [...cart, id];
  saveDataToLocalStorage(newCart);
};
const removeFromLocalStorage = (id) => {
  const storedData = getCartFromLocalStorage();
  const remainingData = storedData.filter((item) => item !== id);
  saveDataToLocalStorage(remainingData);
};
export { addItemLocalStorage, getCartFromLocalStorage, removeFromLocalStorage };
