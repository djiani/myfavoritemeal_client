import React from 'react';
import {connect} from 'react-redux';
import MealList from './mealList';
import SearchSection from './searchSection';
//import {API_BASE_URL} from '../config';
import {loadMealData, loadMealDataFetch} from '../actions/meal';
import {Grid, Row, Col} from 'react-bootstrap';

//import AddMeal from './addMeal';
export class DashBoard extends React.Component{ 

  //sleep(ms){return new Promise(resolve => setTimeout(resolve, ms))}

  componentWillMount() {
    console.log('loading data from db');
    //reset ownership to false to load all meal
    this.props.dispatch(loadMealDataFetch());
    //this.sleep(1000).then(()=> {
    this.props.dispatch(loadMealData());
   // })

  }
  

  render(){ 
    let body;
    if(this.props.error){
      body = (
        <div className="message message-error">errror occured</div>
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
        //indexMeal: state.meal.indexMeal, 
        //viewsrecipes: state.meal.viewsrecipes,
        loading: state.meal.loading,
        error: state.meal.error,
        meals: state.meal.meals
    };
};

export default connect(mapStateToProps)(DashBoard);