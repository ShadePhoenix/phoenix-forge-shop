import style from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";

const NavBar = () => {
    return (
        <nav className={style.NavBar}>
            <section className={style.NavBar__links}>
                <Link className={style.NavBar__link} to="/">
                    Home
                </Link>
                <Link className={style.NavBar__link} to="/products">
                    Products
                </Link>
            </section>
            <SearchBar />
        </nav>
    );
};

export default NavBar;
