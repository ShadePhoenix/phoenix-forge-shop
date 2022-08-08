import style from "./Home.module.scss";
import FeaturedProducts from "../../container/FeaturedProducts";

const Home = () => {
    return (
        <main>
            <header className={style.Home__header}>
                <h2>Home</h2>
            </header>
            <FeaturedProducts />
        </main>
    );
};

export default Home;
