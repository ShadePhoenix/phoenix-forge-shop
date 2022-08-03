import style from "./FeaturedProducts.module.scss";
import { getProducts } from "../../service/firestore-server";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProductCard from "../../component/ProductCard";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const getFeatured = async () => {
        const data = await getProducts();
        setProducts(data);
    };
    useEffect(() => {
        if (products.length > 0) return;
        getFeatured();
    }, []);

    return (
        <article>
            <h2>Featured</h2>
            {/* Corosel of featured products for PC/Larger screens. scrollable list for mobile */}
            {/* Get featured products then loop to display*/}
            {products.length > 0 &&
                products.map((product) => {
                    console.log(product);
                    return (
                        <Link key={product.id} to={product.id.toString()}>
                            <ProductCard productInfo={product} />
                        </Link>
                    );
                })}
        </article>
    );
};

export default FeaturedProducts;
