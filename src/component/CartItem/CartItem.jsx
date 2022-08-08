import { useState, useEffect } from "react";
import style from "./CartItem.module.scss";
import Counter from "../../component/Counter";
import { getProductByID } from "../../service/firestore-server";
import { addItem } from "../../service/shopping-cart";

const CartItem = (props) => {
    const { item, handleDelete } = props;

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(item.qty);

    const getData = async () => {
        const data = await getProductByID(item.id);
        setProduct(data);
    };

    useEffect(() => {
        addItem(item.id, quantity);
    }, [quantity]);

    useEffect(() => {
        getData();
    }, []);

    const handleCounter = (newQty) => {
        setQuantity(newQty);
    };

    return (
        product && (
            <article className={style.CartItem}>
                <img
                    className={style.CartItem__image}
                    src={product.imageURL}
                    alt=""
                />
                <section className={style.CartItem__details}>
                    <h2>{product.name}</h2>
                    <Counter
                        productQty={product.quantity}
                        cartQty={quantity}
                        handleCounter={handleCounter}
                    />
                    <button
                        className={style.CartItem__details_delete}
                        onClick={handleDelete}
                    >
                        <span className={style.MSO}>delete</span>
                    </button>
                </section>
            </article>
        )
    );
};

export default CartItem;
