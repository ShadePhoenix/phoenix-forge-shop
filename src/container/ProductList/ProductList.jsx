import style from "./ProductList.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../service/firestore-server";
import ProductCard from "../../component/ProductCard";

const ProductList = (props) => {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const data = await getAllProducts();
        setProducts(data);
    };
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <article className={style.ProductList}>
            <section className={style.ProductList__viewer}>
                {products.length > 0 &&
                    products.map((product) => {
                        return (
                            <Link
                                key={product.id}
                                className={style.ProductList__link}
                                to={`/products/p/${product.id.toString()}`}
                            >
                                <ProductCard productInfo={product} />
                            </Link>
                        );
                    })}
            </section>
        </article>
    );
};

export default ProductList;
