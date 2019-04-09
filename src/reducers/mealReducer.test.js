import {mealReducer} from './mealReducer';

import {addDirection, addIngredient, breakfastchecked, lunchchecked, dinnerchecked,
  easychecked, intermedchecked, difficultchecked, loadMealDataFetch, loadMealDataSuccess, loadMealDataFailure} from '../actions/meal';

describe('mealReducer', ()=>{
 const initialState = {
  error: null,
  loading: false,
  success: false,
  breakfastChecked: false,
  lunchChecked: false,
  dinnerChecked: false,
  easyChecked: false,
  intermedChecked: false,
  difficultChecked: false,
  mealID: '',

  meals: [
  
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

  it('Should set the initial state when nothing is passed in ', ()=>{
     const state = mealReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(initialState);
  })

  it('Should return the current state on an unknown action', () => {
        let currentState = initialState;
        const state = mealReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

  describe('addDirection', ()=>{
    let state = {
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
    }

    it('should add new step ', ()=>{
      state = mealReducer(state, addDirection('step 1'));
      state = mealReducer(state, addDirection('step 2'));
      expect(state.currentMeal.directions).toEqual(['step 1', 'step 2']);
    })
  });
  
  describe('addIngredients', ()=>{
    let state = {
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
    }

    it('should add new step ', ()=>{
      state = mealReducer(state, addIngredient('ingredient 1'));
      state = mealReducer(state, addIngredient('ingredient 2'));
      expect(state.currentMeal.ingredients).toEqual(['ingredient 1', 'ingredient 2']);
    })
  });   

  describe('breakfastchecked', ()=>{
    let state = initialState;
    it('should set checkbox breakfastChecked ', ()=>{
      state = mealReducer(state, breakfastchecked())
      expect(state.breakfastChecked).toEqual(true);
      state = mealReducer(state, breakfastchecked())
      expect(state.breakfastChecked).toEqual(false);
    })
  })

  describe('lunchchecked', ()=>{
    let state = initialState;
    it('should set checkbox lunchchecked ', ()=>{
      state = mealReducer(state, lunchchecked())
      expect(state.lunchChecked).toEqual(true);
      state = mealReducer(state, lunchchecked())
      expect(state.lunchChecked).toEqual(false);
    })
  })

  describe('dinnerchecked', ()=>{
    let state = initialState;
    it('should set checkbox dinnerchecked ', ()=>{
      state = mealReducer(state, dinnerchecked())
      expect(state.dinnerChecked).toEqual(true);
      state = mealReducer(state, dinnerchecked())
      expect(state.dinnerChecked).toEqual(false);
    })
  })

  describe('easychecked', ()=>{
    let state = initialState;
    it('should set checkbox easychecked ', ()=>{
      state = mealReducer(state, easychecked())
      expect(state.easyChecked).toEqual(true);
      state = mealReducer(state, easychecked())
      expect(state.easyChecked).toEqual(false);
    })
  })

  describe('intermedchecked', ()=>{
    let state = initialState;
    it('should set checkbox intermedchecked ', ()=>{
      state = mealReducer(state, intermedchecked())
      expect(state.intermedChecked).toEqual(true);
      state = mealReducer(state, intermedchecked())
      expect(state.intermedChecked).toEqual(false);
    })
  })

  describe('difficultchecked', ()=>{
    let state = initialState;
    it('should set checkbox difficultchecked ', ()=>{
      state = mealReducer(state, difficultchecked())
      expect(state.difficultChecked).toEqual(true);
      state = mealReducer(state, difficultchecked())
      expect(state.difficultChecked).toEqual(false);
    })
  })

  describe('loadMeal', ()=>{
    it('should set loading when in process to fetch data', ()=>{
      let state = initialState
      state = mealReducer(state, loadMealDataFetch());
      expect(state.loading).toEqual(true);
      expect(state.error).toEqual(null);
    })

    it('should set meal state on loadmeal success', ()=>{
      let state = initialState
      let meals = []
      state = mealReducer(state, loadMealDataSuccess(meals));
      expect(state.loading).toEqual(false);
      expect(state.error).toEqual(null);
      expect(state.meals).toEqual(meals);
    })

    it('should set error on loadmeal failure', ()=>{
      let state = initialState;
      let error = 'error occured';
      state = mealReducer(state, loadMealDataFailure(error));
      expect(state.loading).toEqual(false);
      expect(state.error).toEqual(error);
      expect(state.meals).toEqual(initialState.meals);
    })
  })

  
})