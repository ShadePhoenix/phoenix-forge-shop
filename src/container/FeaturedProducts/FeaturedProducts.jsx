import style from "./FeaturedProducts.module.scss";
import { getFeaturedProducts } from "../../service/firestore-server";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProductCard from "../../component/ProductCard";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const getFeatured = async () => {
        const data = await getFeaturedProducts();
        setProducts(data);
    };
    useEffect(() => {
        getFeatured();
    }, []);

    return (
        <article className={style.FeaturedProducts}>
            <header>
                <h2 className={style.FeaturedProducts__header}>Featured</h2>
            </header>
            {/* Corosel of featured products for PC/Larger screens. scrollable list for mobile */}
            {/* Get featured products then loop to display*/}
            <section className={style.FeaturedProducts__viewer}>
                {products.length > 0 &&
                    products.map((product) => {
                        return (
                            <Link
                                key={product.id}
                                className={style.FeaturedProducts__link}
                                to={`products/p/${product.id.toString()}`}
                            >
                                <ProductCard productInfo={product} />
                            </Link>
                        );
                    })}
            </section>
        </article>
    );
};

export default FeaturedProducts;
