import React from "react";
import styles from "./Header.module.css";
import logo from "../Layout/meals.jpeg";
import Button from "../components/UI/Button";
const Header = props => {
  let cartSize = 0;
  if (props.cart.length !== 0) {
    console.log(props.cart);
    cartSize += props.cart.reduce((acc, val) => acc + val.value, 0);
    console.log(cartSize);
  }
  return (
    <div>
      <div className={styles.header}>
        <h2>React Meals </h2>

        <Button className={styles.button}>
          Your Cart <span className={styles.badge}>{cartSize} </span>
        </Button>
      </div>

      <div className={styles["main-image"]}>
        <img src={logo} alt="food"></img>
      </div>
    </div>
  );
};

export default Header;
