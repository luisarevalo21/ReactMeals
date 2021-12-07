import React, { useState } from "react";
import MealsListItems from "./components/Meals/MealsListItems";
import Header from "./Layout/Header";

import MealSummary from "./components/Meals/MealSummary";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    value: 1,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    value: 1,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    value: 1,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    value: 1,
  },
];

function App() {
  const meals = [...DUMMY_MEALS];

  const [sushiValue, setSushiValue] = useState("1");
  const [schnizelValue, setSchnizelValue] = useState("1");
  const [bbqValue, setBBQValue] = useState("1");
  const [greenBowlValue, setGreenBowlValue] = useState("1");

  const [cart, setCart] = useState([]);

  const addItemToCartHandler = (newId, newValue) => {
    const newItem = meals.filter(el => el.id === newId);
    newItem[0].value = newValue;
    setCart(cart => [...cart, newItem[0]]);
  };
  // return [...cart, { id, name, description, price, value }];

  // setCart(cart => {
  //   if (cart.length === 0) {
  //     const newItem = DUMMY_MEALS.filter(el => el.id === id);
  //     newItem.quantity = 1;
  //     return newItem;
  //   }
  //   // console.log(cart);
  //   // const newItemToADD = cart.filter(el => el.id === id);

  //   // newItemToADD.quantity += 1;

  //   // return [...cart, newItemToADD];
  // });
  // console.log("adding clicked", id);

  const increasedQuantityHandler = (mealId, value) => {
    console.log("increased quantiyy triggered");
    const mealToChange = meals.filter(meal => meal.id === mealId);
    mealToChange[0].value = value;

    if (mealId === "m1") return setSushiValue(mealToChange[0].value);
    if (mealId === "m2") return setSchnizelValue(mealToChange[0].value);
    if (mealId === "m3") return setBBQValue(mealToChange[0].value);
    if (mealId === "m4") return setGreenBowlValue(mealToChange[0].value);
    // setItem(value);
  };
  console.log("the itme is", cart);
  // const meals = [
  //   { menuItemName: "sushi", menuItemDetails: "yummy sushi", price: 22 },
  //   { menuItemName: "sushi", menuItemDetails: "yummy sushi", price: 22.99 },
  //   { menuItemName: "sushi", menuItemDetails: "yummy sushi", price: 22.99 },
  //   { menuItemName: "sushi", menuItemDetails: "yummy sushi", price: 22.99 },
  //   { menuItemName: "sushi", menuItemDetails: "yummy sushi", price: 22.99 },
  //   { menuItemName: "sushi", menuItemDetails: "yummy sushi", price: 22.99 },
  //   { menuItemName: "sushi", menuItemDetails: "yummy sushi", price: 22.99 },
  // ];
  return (
    <div>
      <Header cart={cart} />
      {/* <h2>Let's get started!</h2> */}
      <MealSummary />
      <MealsListItems
        meals={DUMMY_MEALS}
        // item={values}
        addItem={addItemToCartHandler}
        quantityIncreased={increasedQuantityHandler}
      />
    </div>
  );
}

export default App;
