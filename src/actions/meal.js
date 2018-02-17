export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  ingredient
});

export const ADD_DIRECTION = 'ADD_DIRECTION';
export const addDirection = (direction) => ({
  type: ADD_DIRECTION,
  direction
});

export const VIEWS_RECIPES = 'VIEWS_MEAL';
export const viewsRecipes = (indexMeal, title) =>({
  type: VIEWS_RECIPES,
  indexMeal,
  title
});

export const ADD_MEAL = 'ADD_MEAL';
export const addmeal = (meal) =>({
  type: ADD_MEAL,
  meal
});
