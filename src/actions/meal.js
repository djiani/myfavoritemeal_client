export const ADD_MEAL = 'ADD_MEAL';
export const addMeal = (name, mealIndex) => ({
  type: ADD_MEAL, 
  name, 
  mealIndex
});

export const FETCH_MEAL = 'FETCH_MEAL';
export const fetchMeal = (meals) =>(
{
  type: FETCH_MEAL
})
