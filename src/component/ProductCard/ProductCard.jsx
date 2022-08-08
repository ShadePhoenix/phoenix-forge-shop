import style from "./ProductCard.module.scss";

const ProductCard = (props) => {
    const productInfo = props.productInfo;
    return (
        <article className={style.ProductCard}>
            <img
                className={style.ProductCard__image}
                src={productInfo.imageURL}
                alt=""
            />
            <header>
                <h3>{productInfo.name}</h3>
            </header>
            <section className={style.ProductCard__details}>
                <p>Price: ${productInfo.price}</p>
                <p>Qty: {productInfo.quantity}</p>
            </section>
        </article>
    );
};

export default ProductCard;
