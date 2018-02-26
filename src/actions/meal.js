import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

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



export const addmeal = (meal) =>dispatch => {
  return fetch(`${API_BASE_URL}/meals`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(meal)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
        const {reason, message, location} = err;
        if (reason === 'ValidationError') {
            // Convert ValidationErrors into SubmissionErrors for Redux Form
          return Promise.reject(
            new SubmissionError({
                [location]: message
            })
          );
        }
    }
  );
}
  

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