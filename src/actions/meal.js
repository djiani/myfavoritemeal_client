export const ADD_MEAL_FORM = 'ADD_MEAL_FORM';
export const addMealForm = () => ({
  type: ADD_MEAL_FORM  
});

export const VIEWS_RECIPES = 'VIEWS_MEAL';
export const viewsRecipes = (indexMeal, title) =>({
  type: VIEWS_RECIPES,
  indexMeal,
  title
})

export const WHAT_TO_LOAD = 'WHAT_TO_LOAD';
export const whatToLoad = (tobeloaded) =>({
  type: WHAT_TO_LOAD,
  tobeloaded
})
