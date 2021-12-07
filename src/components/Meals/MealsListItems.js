import React from "react";
import MealsListItem from "./MealsListItem";
import styles from "./MealsListItems.module.css";
const MealsListItems = props => {
  const meals = props.meals.map(meal => {
    return (
      <ul key={meal.id}>
        <MealsListItem
          value={meal.value}
          onChange={e => props.quantityIncreased(meal.id, e.target.value)}
          onClick={() => props.addItem(meal.id, meal.value)}
          price={meal.price}
          name={meal.name}
          description={meal.description}
        />
      </ul>
    );
  });
  return <div className={styles.meals}>{meals}</div>;
};

export default MealsListItems;
