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

// export const VIEWS_RECIPES = 'VIEWS_MEAL';
// export const viewsRecipes = (indexMeal, title) =>({
//   type: VIEWS_RECIPES,
//   indexMeal,
//   title
// });


//add new meal action
export const addmeal = (meal) => dispatch => {
  return fetch(`${API_BASE_URL}/meals`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(meal)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => dispatch(addMealSuccess(true)))
    .catch(err => {
        const {reason, message, location} = err;
        dispatch(addMealFailure(err))
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

export const ADDMEAL_SUCCESS = 'ADDMEAL_SUCCESS';
export const addMealSuccess = (success)=>({
  type: ADDMEAL_SUCCESS,
  success
});

export const ADDMEAL_FAILURE = 'ADDMEAL_FAILURE';
export const addMealFailure = (error)=>({
  type: ADDMEAL_FAILURE,
  error
});

  
//search filter action
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

//fectch meal from the db
export const loadMealData = () => dispatch => {
  console.log('loadMealData call!');
    return fetch(`${API_BASE_URL}/meals`)
    .then(res =>{
      if(!res.ok){
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(meals => {
      console.log(meals)
      dispatch(loadMealDataSuccess(meals)); 
    })
    .catch(err =>{ 
      console.log(err)
      dispatch(loadMealDataFailure(err))
    });

}
//check if meals data being loaded, set loading to true
export const LOADMEALDATA_FETCH = 'LOADMEALDATA_FETCH';
export const loadMealDataFetch = ()=>({
  type: LOADMEALDATA_FETCH

})
export const LOADMEALDATA_SUCCESS = 'LOADMEALDATA_SUCCESS';
export const loadMealDataSuccess = (meals)=>({
  type: LOADMEALDATA_SUCCESS,
  meals
});

export const LOADMEALDATA_FAILURE = 'LOADMEALDATA_FAILURE';
export const loadMealDataFailure = (err)=>({
  type: LOADMEALDATA_FAILURE,
  err
});

//maybe not useful
export const USER_LOGIN = 'USER_LOGIN';
export const userlogin = (userlogin)=> ({
  type: USER_LOGIN,
  userlogin
});

//don't need this action
export const SEARCH_MEALS = 'SEARCH_MEALS';
export const searchMeals = (searchTerm)=> ({
  type: SEARCH_MEALS,
  searchTerm
});

export const CHECKOWNERMEAL = 'CHECKOWNERMEAL';
export const checkOwnerMeal = (isOwnerMeal)=> ({
  type: CHECKOWNERMEAL,
  isOwnerMeal
});


export const SAVE_CURRENT_MEAL_ID = 'SAVE_CURRENT_MEAL_ID';
export const saveCurrentMealId = (mealId)=>({
  type: SAVE_CURRENT_MEAL_ID,
  mealId,
});

export const SAVE_CURRENT_MEAL_SUCCESS = 'SAVE_CURRENT_MEAL_SUCCESS';
export const saveCurrentMealSuccess = (currentMeal)=>({
  type: SAVE_CURRENT_MEAL_SUCCESS,
  currentMeal
});

export const SAVE_CURRENT_MEAL_FAILURE = 'SAVE_CURRENT_MEAL_FAILURE';
export const saveCurrentMealFailure = (error)=>({
  type: SAVE_CURRENT_MEAL_FAILURE,
  error
});

//update meal
export const updateMeal = (meal, mealId) => dispatch => {
  dispatch(updateMealFailure(null)); //clear error message;
  return fetch(`${API_BASE_URL}/meals/${mealId}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(meal)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => dispatch(updateMealSuccess(true)))
    .catch(err => {
        const {reason, message, location} = err;
        dispatch(updateMealFailure(err));
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

export const UPDATEMEAL_SUCCESS = 'UPDATEMEAL_SUCCESS';
export const updateMealSuccess = (success)=>({
  type: UPDATEMEAL_SUCCESS,
  success
});

export const UPDATEMEAL_FAILURE = 'UPDATEMEAL_FAILURE';
export const updateMealFailure = (error)=>({
  type: UPDATEMEAL_FAILURE,
  error
});