import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductByID } from "../../service/firestore-server";
import style from "./ProductView.module.scss";
import { addItem } from "../../service/shopping-cart";
import Counter from "../Counter";

const ProductView = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [qty, setQty] = useState(1);
    const getProduct = async () => {
        const data = await getProductByID(productId);
        setProduct(data);
    };
    useEffect(() => {
        getProduct();
    }, []);

    const handleCounter = (newQty) => {
        setQty(newQty);
    };

    const handleClick = () => {
        addItem(productId, qty);
    };

    return (
        <main>
            <article className={style.ProductView}>
                <img
                    className={style.ProductView__image}
                    src={product.imageURL}
                    alt=""
                />
                <h2>{product.name}</h2>
                <section className={style.ProductView__details}>
                    <h3>${product.price}</h3>
                    <h3>Qty: {product.quantity}</h3>
                </section>
                <section className={style.ProductView__details}>
                    <Counter
                        productQty={product.quantity}
                        cartQty={qty}
                        handleCounter={handleCounter}
                    />
                </section>
                <button
                    className={style.ProductView__btn}
                    onClick={handleClick}
                >
                    Add to Cart
                </button>
                <p>{product.description}</p>
            </article>
        </main>
    );
};

export default ProductView;
