import style from "./Cart.module.scss";

import CartItem from "../../component/CartItem";
import { useEffect, useState } from "react";
import { removeItem } from "../../service/shopping-cart";

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")));
    }, []);

    const handleCheckOut = () => {
        alert("I'm sorry, I can't allow you to do that.");
    };

    const handleDeleteItem = (id) => {
        removeItem(id);
    };

    return (
        <main className={style.Cart}>
            <header className={style.Cart__header}>
                <h2>Cart</h2>
            </header>
            <article>
                {cart.length < 1 && <h3>Nothing here... Lets change that</h3>}
                {cart.length > 0 &&
                    cart.map((item) => {
                        return (
                            <CartItem
                                key={item.id}
                                item={item}
                                handleDelete={handleDeleteItem}
                            />
                        );
                    })}
                {cart.length > 0 && (
                    <button onClick={handleCheckOut}>Check-out</button>
                )}
            </article>
        </main>
    );
};

export default Cart;
