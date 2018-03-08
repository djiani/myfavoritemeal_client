import React from 'react';
import {connect} from 'react-redux';
import MealList from './mealList';
import SearchSection from './searchSection';
import {API_BASE_URL} from '../config';
import {loadMealDataSuccess, loadMealDataFailure, checkOwnerMeal} from '../actions/meal';
import {Grid, Row, Col} from 'react-bootstrap';

//import AddMeal from './addMeal';
export class MealOwnerPage extends React.Component{ 
  
  componentDidMount() {
    console.log('loading data from db');
    this.props.dispatch(checkOwnerMeal(true));
      this.loadMealData();

  }
  
  loadMealData(){
    console.log('loadMealData call!');
    console.log(this.props.match.params);
    return fetch(`${API_BASE_URL}/meals/mymeal/${this.props.match.params.username}`)
        .then(res =>{
          if(!res.ok){
            return Promise.reject(res.statusText);
          }
         // console.log(res.json())
          return res.json();
        })
        .then(meals => {
          console.log(meals)
          this.props.dispatch(loadMealDataSuccess(meals)); 
        })
        .catch(err =>{ 
          console.log(err)
          this.props.dispatch(loadMealDataFailure(err))

        });
    }

  render(){ 
    let body;
    if(this.props.error){
      body = (
        <div className="message message-error">{this.props.error}</div>
      );
    }else if(this.props.loading){
      body = (
        <div className="message message-default">Loading data...</div>
      );
    }else{
      body= (
        <Grid>
         <Row className="show-grid">
          <Col xs={12} sm={4}>
            <SearchSection />
          </Col>
          <Col xs={12} sm={8}>
            <MealList />
          </Col>
      </Row> 
      </Grid>
      )
    }
    return (
    <div> 
      {body} 
    </div>  
    );
    
  }
}


const mapStateToProps = state => { 
    return {
        indexMeal: state.meal.indexMeal, 
        viewsrecipes: state.meal.viewsrecipes,
        loading: state.meal.loading,
        error: state.meal.error,
        meals: state.meal.meals
    };
};

export default connect(mapStateToProps)(MealOwnerPage);