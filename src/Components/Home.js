import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.Slogan}>
        <p>"The time you</p>
        <p> ENJOY wasting </p>
        <p>is not WASTED time"</p>
      </div>
      <Button variant="contained" component={Link} to="/products">
        Get your Watch here
      </Button>
    </div>
  );
};

export { Home };
