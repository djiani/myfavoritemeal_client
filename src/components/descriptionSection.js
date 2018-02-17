import React from 'react';
import './descriptionSection.css';
export default function DescriptionSection(props){
  return (
    <div className="descriptionSection">
      <div className='image_block'>
        <img src="http://www.mealpreppies.com/wp-content/uploads/2015/09/meal-prep-sunday.jpg" alt="logo" className='image_desc'/>
      </div>
      <div className='description_text'> 
        <h1> Experience My Favorite Meal</h1>
        <p> MyFavorite Meals helps you sharing your taste for food with the reste of the world and helps 
          inpirate others about the best plat out there who might be out of mind to what to eat or 
          who might have hard time to choose or order food or what to make for breakfast, lunch, dinner
        </p>
      </div>
    </div>
  )
}