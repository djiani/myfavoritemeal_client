import * as actions from  '../actions/meal';
const IMG_URL_BASE= '/c/Users/djias/OneDrive/cours/web-dev/React/myfavoritemeal_client';

const initialState = {
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
  ]
};

export const  mealReducer= (state=initialState, action)=> {


  return state;
}
