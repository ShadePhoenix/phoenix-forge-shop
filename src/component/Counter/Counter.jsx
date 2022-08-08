import { useEffect, useState } from "react";
import style from "./Counter.module.scss";

const Counter = (props) => {
    const { productQty, cartQty } = props;
    const handleCounter = props.handleCounter;

    const handleBtn = (event) => {
        const newQty = cartQty + Number(event.target.value);
        if ((newQty > productQty) | (newQty < 1)) return;
        handleCounter(newQty);
    };

    return (
        <div className={style.Counter}>
            <button
                className={style.Counter__btn}
                onClick={handleBtn}
                value={-1}
            >
                -
            </button>
            <input
                className={style.Counter__input}
                type="number"
                value={cartQty}
                readOnly
            />
            <button
                className={style.Counter__btn}
                onClick={handleBtn}
                value={+1}
            >
                +
            </button>
        </div>
    );
};

export default Counter;
