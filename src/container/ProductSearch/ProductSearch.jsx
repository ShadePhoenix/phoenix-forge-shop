import style from "./ProductSearch.module.scss";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { searchProducts } from "../../service/firestore-server";
import ProductCard from "../../component/ProductCard";

const ProductSearch = (props) => {
    const { searchTerm } = useParams();
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const data = await searchProducts(searchTerm);
        setProducts(data);
    };
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <article className={style.ProductSearch}>
            <header>
                <h3 className={style.ProductSearch__header}>
                    Found {products.length} product{products.length > 1 && "s"}.
                </h3>
            </header>
            <section className={style.ProductSearch__viewer}>
                {products.length > 0 &&
                    products.map((product) => {
                        return (
                            <Link
                                key={product.id}
                                className={style.ProductSearch__link}
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

export default ProductSearch;
