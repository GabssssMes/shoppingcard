import React from "react";
import { Card } from "./Card";
import style from "./Products.module.css";

const Products = (props) => {
  return (
    <div className={style.content}>
      <h1 className={style.header}>Products</h1>
      <div className={style.items}>
        {props.items.map((item) => {
          return (
            <Card item={item} key={item.key} add={props.add(item.key)}></Card>
          );
        })}
      </div>
    </div>
  );
};

export { Products };
