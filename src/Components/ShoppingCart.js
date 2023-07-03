import React from "react";
import style from "./ShoppingCart.module.css";
import { Shoppingitem } from "./Shoppingitem";

const ShoppingCart = (props) => {
  return (
    <>
      <h1>Shoppingcart</h1>
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
    </>
  );
};

const sum = (items) => {
  let summe = 0;
  items.map((item) => {
    if (item.quantity !== 0) summe = summe + item.quantity * item.price;
    return null;
  });
  return summe;
};

export { ShoppingCart };
