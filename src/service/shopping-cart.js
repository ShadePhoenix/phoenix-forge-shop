export const getCart = () => {
    if (localStorage.getItem("cart") === null)
        localStorage.setItem("cart", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("cart"));
};

export const addItem = (id, qty) => {
    const cart = [...getCart()];
    const item = cart.find((cartItem) => cartItem.id === id);
    if (item) {
        cart[cart.indexOf(item)].qty += qty;
    } else {
        cart.push({ id, qty });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeItem = (id) => {
    const cart = [...getCart()];
    const item = cart.find((cartItem) => cartItem.id === id);
    if (item) {
        cart.splice(cart.indexOf(item));
        localStorage.setItem("cart", JSON.stringify(cart));
    } else {
        alert("This item does not exist in the cart");
    }
};
