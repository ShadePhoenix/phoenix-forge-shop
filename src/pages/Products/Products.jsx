import style from "./Products.module.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../../container/ProductList";
import ProductSearch from "../../container/ProductSearch";

const Products = () => {
    const { searchTerm } = useParams();
    return (
        <main>
            <header className={style.Products__header}>
                <h2>
                    {searchTerm == null
                        ? "Products"
                        : `Products matching "${searchTerm}"`}
                </h2>
            </header>
            {searchTerm == null ? <ProductList /> : <ProductSearch />}
        </main>
    );
};

export default Products;
