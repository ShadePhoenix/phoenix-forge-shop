import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductByID } from "../../service/firestore-server";
import style from "./ProductView.module.scss";

const ProductView = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const getProduct = async () => {
        setProduct(await getProductByID(productId));
    };
    useEffect(() => {
        if (product.legth > 0) return;
        getProduct();
    }, []);
    return (
        <main>
            <article>
                <img src={product.ImageURL} alt="" />
                <header>
                    <h1>{product.Name}</h1>
                    <h2>{product.Price}</h2>
                </header>
                <h3>Qty: {product.Quantity}</h3>
                <p>{product.Description}</p>
            </article>
        </main>
    );
};

export default ProductView;
