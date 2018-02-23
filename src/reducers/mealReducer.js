import * as actions from  '../actions/meal';

const initialState = {
  addmeal: false,
  whatToLoad: '',
  viewsrecipes: '',
  indexMeal: 0,
  breakfastChecked: false,
  lunchChecked: false,
  dinnerChecked: false,
  easyChecked: false,
  intermedChecked: false,
  difficultChecked: false,
  meals: [
    {
      name: 'Cherry Pork Tender Loin',
      description: "short description", 
      category: "breakfast",
      difficulty:'difficult',
      hands_on: 15,
      served: 4,
      ingredients:['tomato', 'oinions'],
      directions:['step1', 'ste2'],
      owner: 'userName',
      image_url: 'https://www.kroger.com/asset/594046c9bae8a2517539743e?data=1'
    },
    {
      name: 'Chili-Lime Pork Roast',
      description: "short description",
      category: "dinner",
      difficulty:'easy',
      hands_on: 20,
      served: 4,
      ingredients:['tomato', 'oinions'],
      directions:['step1', 'ste2'],
      owner: 'userName',
      image_url: 'https://www.kroger.com/asset/5a74b5d984ae789fcdcb6044?data=1'

    },
    {
      name: 'Mexican Chili Pie',
      description:'Craving a little something spicy for supper?' 
      +'This dish combines sweet cornbread, spicy chili, and creamy cheese in one simple casserole',
      category: "lunch",
      difficulty:'easy',
      hands_on: 20,
      served: 4,
      ingredients:['1 package (1.25 oz.) McCormick Chili Seasoning Mix', 
        '1 lb. lean ground beef', '1 can (14½ oz.) diced tomatoes, undrained',
        '1 can (5 oz.) kidney beans, undrained','1 small box (9 oz.) yellow cake mix',
        '1 package (9 oz.) cornbread mix', '2 large eggs', '⅓ cup whole milk', '½ cup water', '2 cups grated Cheddar cheese',
        ],
      directions:['Preheat oven to 350°F. Grease a 9" × 13" baking dish.',
       'Combine chili seasoning mix, ground meat, tomatoes, and beans and cook according to directions on envelope. While chili simmers, mix cake mix, cornbread mix, eggs, milk, and water in a separate bowl.',
       'Pour chili into a 9" × 13" baking dish. Top with cornbread mixture and sprinkle liberally with Cheddar cheese. Bake for 30 minutes or until crust is golden.'],
      owner: 'userName',
      image_url: 'https://www.kroger.com/asset/594046a8bae8a25175396ec2?data=1'
    }
  ], 
  currentMeal:{
    name: '',
    description: '',
    category: '',
    difficulty:'',
    hands_on: 0,
    served: 0,
    ingredients:[],
    directions:[],
    owner: '',
    image_url: ''
  }
};

export const mealReducer = (state=initialState, action) => {
  if(action.type === actions.ADD_INGREDIENT){
    return Object.assign({}, state, {
      currentMeal: {
        ingredients: [...state.ingredients, action.ingredient]
      }
    })
  }
  if(action.type === actions.ADD_DIRECTION){
    return Object.assign({}, state, {
      currentMeal: {
        directions: [...state.directions, action.direction]
      }
    })
  }

  if(action.type === actions.VIEWS_RECIPES){
    return Object.assign({}, state, {
      viewsrecipes: action.title,
      addmeal: false,
      indexMeal: action.indexMeal
    })
  }

  if(action.type === actions.ADD_MEAL){
    return Object.assign({}, state, {
        meals: [...state.meals, action.meal]
      
    })
  }

  if(action.type === actions.BREAKFAST_CHECKED){
    return Object.assign({}, state, {
        breakfastChecked: !state.breakfastChecked
    })
  }

  if(action.type === actions.LUNCH_CHECKED){
    return Object.assign({}, state, {
        lunchChecked: !state.lunchChecked
    })
  }

  if(action.type === actions.DINNER_CHECKED){
    return Object.assign({}, state, {
        dinnerChecked: !state.dinnerChecked
    })
  }

  if(action.type === actions.EASY_CHECKED){
    return Object.assign({}, state, {
        easyChecked: !state.easyChecked
    })
  }
  if(action.type === actions.INTERMED_CHECKED){
    return Object.assign({}, state, {
        intermedChecked: !state.intermedChecked
    })
  }

  if(action.type === actions.DIFFICULT_CHECKED){
    return Object.assign({}, state, {
        difficultChecked: !state.difficultChecked
    })
  }
  return state;
}
