import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./MealsListItem.module.css";
import Input from "../UI/Input";
const MealsListItem = props => {
  return (
    <Card>
      <div className={styles["cart-item"]}>
        <div>
          <h2>{props.name}</h2>
          <div>{props.description}</div>
          <div className={styles.price}>${props.price.toFixed(2)}</div>
        </div>
        <div>
          <Input
            label="Amount"
            type="number"
            value={props.value}
            min={1}
            onChange={props.onChange}
          />
          <Button onClick={props.onClick}>+ Add</Button>
        </div>
      </div>
    </Card>
  );
};

export default MealsListItem;
