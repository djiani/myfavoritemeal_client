import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { mealReducer } from './reducers/mealReducer'

const reducers = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  meal: mealReducer
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducers);

export default store;
