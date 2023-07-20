import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.Slogan}>
        <p className={style.saying}>
          "Everyone looks at your watch and it represents who you are, your
          values and your personal style"
        </p>
        <p className={style.origin}>--- Kobe Bryant ---</p>
      </div>
      <Button variant="contained" component={Link} to="/products">
        Get your Watch here
      </Button>
    </div>
  );
};

export { Home };
