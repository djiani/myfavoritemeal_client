import React from 'react';
import './descriptionSection.css';
export default function DescriptionSection(props){
  return (
    <div className="descriptionSection">
      
      <div className='description_text'>  
        <div className="header_block">
          <h1 className="text_effect"> Experience My Favorite Meal</h1>
        </div>
        <div className="well well-lg text_block">
          <p> MyFavoriteMeal is a social platform where users can share their food habits and preferences. 
            This web platform is developed principally 
            to inspire and to teach culinary novices and promote the food out there. 
            With the recipes and directions provided, anyone can trying by himself to make something new, 
            quick and fast at his own space and time.
          </p>
          <q>If you really want to make a friend, go to someone's house and eat with him.
           The people who give you their food give you their heart - Cesar Chavez
          </q>
        </div>
        <div className="header_block">
          <h2 className="text_effect">Enjoy your Meal!!</h2>
        </div>

      </div>
      
      <div className='image_block'>
        <img src="http://www.mealpreppies.com/wp-content/uploads/2015/09/meal-prep-sunday.jpg" alt="logo" className='image_desc'/>
      </div>
    </div>
  )
}