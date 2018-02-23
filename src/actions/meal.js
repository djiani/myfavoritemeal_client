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

export const BREAKFAST_CHECKED = 'BREAKFAST_CHECKED';
export const breakfastchecked = ()=>({
  type: BREAKFAST_CHECKED,
  
});

export const LUNCH_CHECKED = 'LUNCH_CHECKED';
export const lunchchecked = ()=>({
  type: LUNCH_CHECKED,
  
});

export const DINNER_CHECKED = 'DINNER_CHECKED';
export const dinnerchecked = ()=>({
  type: DINNER_CHECKED,
});

export const EASY_CHECKED = 'EASY_CHECKED';
export const easychecked = ()=>({
  type: EASY_CHECKED,
});

export const INTERMED_CHECKED = 'INTERMED_CHECKED';
export const intermedchecked = ()=>({
  type: INTERMED_CHECKED,
});

export const DIFFICULT_CHECKED = 'DIFFICULT_CHECKED';
export const difficultchecked = ()=>({
  type: DIFFICULT_CHECKED,
});