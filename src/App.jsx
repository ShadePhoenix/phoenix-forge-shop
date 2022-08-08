import logo from "./logo.svg";
import style from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useRef, useState } from "react";
//Page imports
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";

//Container imports
import Header from "./component/Header";

//Component imports
import NavBar from "./component/NavBar";
import ProductView from "./component/ProductView";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:searchTerm" element={<Products />} />
                <Route
                    path="/products/p/:productId"
                    element={<ProductView />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" elements={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
