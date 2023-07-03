import React from "react";
import style from "./Card.module.css";

function Card(props) {
  const item = props.item;
  return (
    <div className={style.card}>
      <img
        className={style.picture}
        src={item.src}
        alt={item.description}
      ></img>
      <div className={style.description}>{item.description}</div>
      <div className={style.price}>{item.price}€</div>
      <button className={style.button} onClick={props.add}>
        Add to card
      </button>
    </div>
  );
}

export { Card };
