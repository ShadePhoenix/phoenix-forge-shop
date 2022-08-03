import style from "./Header.module.scss";

const Header = () => {
    return (
        <header className={style.Header}>
            <img
                className={style.Header__logo}
                src={/* link the logo here */ null}
                alt="Phoenix Forge Logo"
            />
            <h1 className={style.Header__heading}>Phoenix Forge</h1>
            <h2 className={style.Header__subHeading}>Blacksmith and Jeweler</h2>
        </header>
    );
};

export default Header;
