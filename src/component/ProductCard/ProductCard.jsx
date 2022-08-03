import style from "./ProductCard.module.scss";

const ProductCard = (props) => {
    const productInfo = props.productInfo;
    return (
        <article>
            {/* <img src={productInfo.ImageURL} alt="" /> */}
            <header>
                <h3>{productInfo.Name}</h3>
            </header>
        </article>
    );
};

export default ProductCard;
