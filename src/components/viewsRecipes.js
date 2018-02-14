import React from 'react';

export default function ViewsRecipes(props){
  console.log(props);

  return(
    <div>
      <div>
        <div className="img_block">
           <img src={props.meal.image_url} alt="test" /> 
          <h3> ingredients</h3>
        </div>
        <div  className="description">
          
          <h3> ingredients</h3>
        </div>
      </div> 
      <div>
        <div className="ingredients">
         <h3> ingredients</h3>
        </div>
        <div  className="direction">
          <h3> direction</h3>
        </div>
      </div> 
    
    </div>
    
  )
}

