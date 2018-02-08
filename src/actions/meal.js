export const ADD_MEAL = 'ADD_MEAL';
export const addMeal = (name, mealIndex) => ({
  type: ADD_MEAL, 
  name, 
  mealIndex
});