import React from "react";
import style from "./Shoppingitem.module.css";

function Shoppingitem(props) {
  const item = props.item;
  return (
    <div className={style.item}>
      <img
        className={style.picture}
        src={item.src}
        alt={item.description}
      ></img>
      <div className={style.cardcontent}>
        <div className={style.description}>{item.description}</div>
        <div className={style.price}>{item.price * item.quantity}€</div>
        <div className={style.quantity}>
          <button className={style.quantityButton} onClick={props.add}>
            +
          </button>
          <div className={style.number}>{item.quantity}</div>
          <button className={style.quantityButton} onClick={props.minus}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export { Shoppingitem };
