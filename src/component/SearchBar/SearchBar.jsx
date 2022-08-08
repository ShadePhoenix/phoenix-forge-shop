import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./SearchBar.module.scss";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate(`/products/${search}`, { replace: true });
        setSearch("");
    };
    const handleSubmitEnter = (event) => {
        if (event.key === "Enter") {
            navigate(`/products/${search}`, { replace: true });
            setSearch("");
        }
    };

    //useEffect(() => setSearch(""), []);

    return (
        <section className={style.SearchBar}>
            <input
                className={style.SearchBar__input}
                type="text"
                name="searchInput"
                id="searchInput"
                value={search}
                onChange={handleInputChange}
                onKeyDown={handleSubmitEnter}
            />
            <button className={style.SearchBar__btn} onClick={handleSubmit}>
                <span className={style.MSO}>Search</span>
            </button>
        </section>
    );
};

export default SearchBar;
