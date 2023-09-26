import React, { useState } from "react";
import Counter from "./Counter";

export default function Meals(props) {
  let mealList = {
    three: ["Breakfast", "Lunch", "Dinner"],
    six: [
      "Breakfast",
      "Snack before lunch",
      "Lunch",
      "Tea",
      "Dinner",
      "Night snack",
    ],
  };
  let { three, six } = mealList;

  let [showButton, setShowButton] = useState(true);

  const [meals, setMeals] = useState(three);

  let [mealCount, setMealCount] = useState(meals.length);

  const handleClickForMoreEnergy = () => {
    setMeals(six);
    setShowButton(false);
    setMealCount(6);
    reset();
  };

  const handleClickForLessEnergy = () => {
    setMeals(three);
    setShowButton(true);
    setMealCount(3);
    reset();
  };

  const reset = () => {
    setFinishedCount(0);
    setCheckedState(false);
    //checked={false}
  };

  let [finishedCount, setFinishedCount] = useState(0);

  const handleCheckBox = () => {
    console.log(finishedCount);
    setFinishedCount(finishedCount++);
    setFinishedCount(finishedCount++); // 點解兩次先得?
  };

  const [checkedState, setCheckedState] = useState(false);

  return (
    <div>
      <h1>{props.title}</h1>
      {showButton && (
        <button onClick={handleClickForMoreEnergy}>
          Click for getting more energy.
        </button>
      )}

      {!showButton && (
        <button onClick={handleClickForLessEnergy}>Click for fitness.</button>
      )}
      <div>
        {meals.map((meal) => (
          <div key={meals.indexOf(meal)}>
            <input
              type="checkbox"
              name=""
              id={meal}
              onClick={handleCheckBox}
              checked={checkedState}
            />
            <label htmlFor={meal}>{meal}</label>
          </div>
        ))}
        <Counter total={mealCount} finished={finishedCount} />
      </div>
    </div>
  );
}
