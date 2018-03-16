import React from 'react';
import {connect} from 'react-redux';
import MealList from './mealList';
import SearchSection from './searchSection';
//import {API_BASE_URL} from '../config';
import {loadMealData, checkOwnerMeal, loadMealDataFetch} from '../actions/meal';
import {Grid, Row, Col} from 'react-bootstrap';

//import AddMeal from './addMeal';
export class DashBoard extends React.Component{ 

  sleep(ms){return new Promise(resolve => setTimeout(resolve, ms))}

  componentWillMount() {
    console.log('loading data from db');
    //reset ownership to false to load all meal
    this.props.dispatch(loadMealDataFetch());
    this.sleep(1000).then(()=> {
      this.props.dispatch(checkOwnerMeal(false));
      this.props.dispatch(loadMealData());
    })
    
    //this.loadMealData();

  }
  
  // loadMealData(){
  //   console.log('loadMealData call!');
  //   return fetch(`${API_BASE_URL}/meals`)
  //   .then(res =>{
  //     if(!res.ok){
  //       return Promise.reject(res.statusText);
  //     }
  //     return res.json();
  //   })
  //   .then(meals => {
  //     console.log(meals)
  //     this.props.dispatch(loadMealDataSuccess(meals)); 
  //   })
  //   .catch(err =>{ 
  //     console.log(err)
  //     this.props.dispatch(loadMealDataFailure(err))

  //   });
  // }

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
          <Col xs={12} sm={3}>
            <SearchSection />
          </Col>
          <Col xs={12} sm={9}>
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

export default connect(mapStateToProps)(DashBoard);