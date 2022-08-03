import { useState } from "react";
import style from "./SearchBar.module.scss";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearchSumbit = () => {};

    return (
        <section className={style.SearchBar}>
            <input
                className={style.SearchBar__input}
                type="text"
                name="searchInput"
                id="searchInput"
                value={search}
                onChange={handleInputChange}
            />
            <button
                className={style.SearchBar__btn}
                onClick={handleSearchSumbit}
            >
                <span className={style.MSO}>Search</span>
            </button>
        </section>
    );
};

export default SearchBar;
