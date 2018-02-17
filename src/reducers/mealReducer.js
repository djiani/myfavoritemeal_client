import * as actions from  '../actions/meal';

const initialState = {
  addmeal: false,
  whatToLoad: '',
  viewsrecipes: '',
  indexMeal: 0,
  meals: [
    {
      name: 'Cherry Pork Tender Loin',
      type: "Lunch",
      difficulty:'Easy',
      hands_on: 15,
      served: 4,
      ingredients:['tomato', 'oinions'],
      directions:['step1', 'ste2'],
      owner: 'userName',
      image_url: 'https://www.kroger.com/asset/594046c9bae8a2517539743e?data=1'
    },
    {
      name: 'Chili-Lime Pork Roast',
      type: "Lunch",
      difficulty:'Easy',
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
      type: "Lunch",
      difficulty:'Easy',
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
  newMeal:{
    name: '',
    type: '',
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
      newMeal: {
        name: state.newMeal.name,
        type: state.newMeal.type,
        difficulty: state.newMeal.difficulty,
        served: state.newMeal.served,
        owner: state.newMeal.owner,
        image_url: state.newMeal.image_url,
        ingredients: [...state.newMeal.ingredients, action.ingredient],
        directions: state.newMeal.directions,
      }
    })
  }
  if(action.type === actions.ADD_DIRECTION){
    return Object.assign({}, state, {
      newMeal: {
        name: state.newMeal.name,
        type: state.newMeal.type,
        difficulty: state.newMeal.difficulty,
        served: state.newMeal.served,
        owner: state.newMeal.owner,
        image_url: state.newMeal.image_url,
        ingredients: state.newMeal.ingredients,
        directions: [...state.newMeal.directions, action.direction]
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
      meal:{
        addmeal: state.meal.addmeal,
        viewsrecipes: state.meal.viewsrecipes,
        indexMeal: state.meal.indexMeal,
        meals: [...state.meals.meals, action.meal]
      }
     
    })
  }

  return state;
}
