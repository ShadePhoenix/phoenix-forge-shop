import logo from "./logo.svg";
import style from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Page imports
import Home from "./pages/Home";
import Products from "./pages/Products";

//Container imports
import Header from "./component/Header";

//Component imports
import NavBar from "./component/NavBar";
import ProductView from "./component/ProductView";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productId" element={<ProductView />} />
                {/* <Route path="/admin" elements={<Admin />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
