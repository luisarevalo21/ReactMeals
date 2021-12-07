import React from "react";
import styles from "./Input.module.css";
const Input = props => {
  return (
    <div className={styles.input}>
      <label id={props.id}> {props.label}</label>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        min={props.min}
      />
    </div>
  );
};

export default Input;
