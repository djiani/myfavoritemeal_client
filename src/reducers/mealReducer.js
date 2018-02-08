import * as actions from  '../actions/meal';

const initialState = {
  meals: [
    {
      name: 'Meal1',
      type: "breakfast",
      Difficulty:'Easy',
      Hands_on: 20,
      served: 4,
      Ingredients:['tomato', 'oinions'],
      directions:['step1', 'ste2'],
      postedBy: 'userName'
    },
    {
      name: 'Meal1',
      type: "breakfast",
      Difficulty:'Easy',
      Hands_on: 20,
      served: 4,
      Ingredients:['tomato', 'oinions'],
      directions:['step1', 'ste2'],
      postedBy: 'userName'

    }
  ]
};

export const mealReducer = (state=initialState, action) => {


  return state;
}