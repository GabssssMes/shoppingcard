import React from "react";
import style from "./MySideBar.module.css";
import { Shoppingitem } from "./Shoppingitem";
import { FaWindowClose } from "react-icons/fa";

function MySideBar(props) {
  return (
    <div className={style.sidebar} id="sidebar">
      <div className={style.close} onClick={props.close}>
        <FaWindowClose />
      </div>
      <h1>ShoppingCart</h1>
      <div className={style.content}>
        <div className={style.items}>
          {props.items.map((item) => {
            if (item.quantity !== 0)
              return (
                <Shoppingitem
                  item={item}
                  add={props.add(item.key)}
                  minus={props.minus(item.key)}
                  key={item.key}
                ></Shoppingitem>
              );
            return null;
          })}
        </div>
        <div className={style.sum}>Total:{sum(props.items)}€</div>
      </div>
    </div>
  );
}

const sum = (items) => {
  let summe = 0;
  items.map((item) => {
    if (item.quantity !== 0) summe = summe + item.quantity * item.price;
    return null;
  });
  return summe;
};

export { MySideBar };
