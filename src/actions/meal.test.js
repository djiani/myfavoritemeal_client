import {ADD_INGREDIENT, addIngredient, ADD_DIRECTION, addDirection,
  addmeal, ADDMEAL_SUCCESS, addMealSuccess, ADDMEAL_FAILURE, addMealFailure,
LOADMEALDATA_FETCH, loadMealDataFetch, LOADMEALDATA_SUCCESS, loadMealDataSuccess, 
LOADMEALDATA_FAILURE, loadMealDataFailure, UPDATEMEAL_SUCCESS, updateMealSuccess, 
UPDATEMEAL_FAILURE, updateMealFailure } from './meal';

describe('addIngredient', () => {
  it('should return the action', () => {
    const ingredient = 'onions';
    const action = addIngredient(ingredient);
    expect(action.type).toEqual(ADD_INGREDIENT);
    expect(action.ingredient).toEqual(ingredient);
  })
})

describe('addDirection', () => {
  it('should return the action', () => {
    const direction = 'step 1';
    const action = addDirection(direction);
    expect(action.type).toEqual(ADD_DIRECTION);
    expect(action.direction).toEqual(direction);
  })
})


// describe('addmeal', ()=>{
//   it('should return the action', ()=>{
//     const meal = {
//      "name": "Chili-Lime Pork Roast 3",
//       "description": "short description",
//       "category": "dinner",
//       "difficulty":"easy",
//       "hands_on": 20,
//       "served": 4,
//       "ingredients":[{"name":"tomato"}, {"name":"oinions"}],
//       "directions":[{"name":"step1"}, {"name":"ste2"}],
//       "owner": {
//         "name":"userName",
//         "username": "sam"
//       },
//       "image_url": "https://www.kroger.com/asset/5a74b5d984ae789fcdcb6044?data=1"
//     }
//     const action = addmeal(meal);
//     expect(action.meal).toEqual(meal);
//   })

// })

describe('addMeal', () => {
  it('should return the action on ADDMEAL_SUCCESS', () => {
    const action = addMealSuccess(true);
    expect(action.type).toEqual(ADDMEAL_SUCCESS);
    expect(action.success).toEqual(true);
  })

  it('should return the action on ADDMEAL_FAILURE', () => {
    const error = 'error occur';
    const action = addMealFailure(error);
    expect(action.type).toEqual(ADDMEAL_FAILURE);
    expect(action.error).toEqual(error);
  })

})



describe('loadMealData', () => {
  it('should return the action on loadMealDataFetch', () =>{
    const action = loadMealDataFetch();
    expect(action.type).toEqual(LOADMEALDATA_FETCH);
  })

  it('should return the action on loadMealDataSuccess', () =>{
    let meals = {}
    const action = loadMealDataSuccess(meals);
    expect(action.type).toEqual(LOADMEALDATA_SUCCESS);
    expect(action.meals).toEqual(meals)
  })
  it('should return the action on loadMealDataFailure', () =>{
    let error = 'error occurred'
    const action = loadMealDataFailure(error);
    expect(action.type).toEqual(LOADMEALDATA_FAILURE);
    expect(action.error).toEqual(error)
  })
})

//update meal
describe('UpdateMeal', ()=>{
  it('should return an action on UPDATEMEAL_SUCCESS', ()=>{
    const action = updateMealSuccess(true);
    expect(action.type).toEqual(UPDATEMEAL_SUCCESS);
    expect(action.success).toEqual(true);
  })

  it('should return an action on UPDATEMEAL_FAILURE', ()=>{
    const error = 'error occurred'
    const action = updateMealFailure(error);
    expect(action.type).toEqual(UPDATEMEAL_FAILURE);
    expect(action.error).toEqual(error);
  })
  
})