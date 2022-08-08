import CartItem from "../../component/CartItem/CartItem";
import style from "./CartView.module.scss";
const CartView = (props) => {
    const { cart } = props;

    const handleCheckOut = () => {
        alert("I'm sorry, I can't allow you to do that.");
    };

    return (
        <article>
            {cart.length < 1 && <h3>Nothing here... Lets change that</h3>}
            {cart.length > 0 &&
                cart.map((item) => {
                    return <CartItem key={item.id} item={item} />;
                })}
            {cart.length > 0 && (
                <button onClick={handleCheckOut}>Check-out</button>
            )}
        </article>
    );
};

export default CartView;
