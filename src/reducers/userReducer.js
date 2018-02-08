import * as actions from  '../actions/';

const initialState ={

  user:[{
    FirstName: 'FirstName1',
    LastName: 'LastName1',
    email: 'email',
    password: 'pass1'

  },
  {
    FirstName: 'FirstName1',
    LastName: 'LastName1',
    email: 'email',
    password: 'pass1' 
  }
  ],
  meal:[{
    name: 'Meal1',
    type: "breakfast",
    Difficulty:'Easy',
    Hands_on: 20,
    served: 4,
    Ingredients:['tomato', 'oinions'],
    directions:['step1', 'ste2']
    postedBy: userName
  },
  {
    name: 'Meal1',
    type: "breakfast",
    Difficulty:'Easy',
    Hands_on: 20,
    served: 4,
    Ingredients:['tomato', 'oinions'],
    directions:['step1', 'ste2']
    postedBy: userName

  }]
  }
};

export mealReducer = (state=initialState, action) => {


  return state;
}