import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Products } from "./Products";
import { ShoppingCart } from "./ShoppingCart";
import { Navbar } from "./Navbar";
import { Items } from "./Items";
import { MySideBar } from "./MySideBar";
import style from "./RouteSwitch.module.css";
import { useState } from "react";

const RouteSwitch = () => {
  let [products, setProducts] = useState(Items);
  const addItemToCar = (key) => (e) => {
    setProducts(
      products.map((product) => {
        if (product.key === key) product.quantity++;
        return product;
      })
    );
  };
  const addButton = (key) => (e) => {
    setProducts(
      products.map((product) => {
        if (product.key === key) product.quantity++;
        return product;
      })
    );
  };

  const minusButton = (key) => (e) => {
    setProducts(
      products.map((product) => {
        if (product.key === key) product.quantity--;
        return product;
      })
    );
  };
  const openSidebar = (e) => {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.width = "500px";
  };
  const closeSideBar = (e) => {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.width = "0px";
  };
  return (
    <>
      <MySideBar
        items={products}
        add={addButton}
        minus={minusButton}
        close={closeSideBar}
      ></MySideBar>
      <div id="content">
        <BrowserRouter>
          <Navbar onClick={openSidebar}></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="" element={<Home></Home>}></Route>
            <Route
              path="/products"
              element={
                <Products items={products} add={addItemToCar}></Products>
              }
            ></Route>
            <Route
              path="/shopping-cart"
              element={
                <ShoppingCart
                  items={products}
                  add={addButton}
                  minus={minusButton}
                ></ShoppingCart>
              }
            ></Route>
            <Route
              path="*"
              element={<h1 className={style.notfound}>Side not found</h1>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export { RouteSwitch };
