import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import { mealReducer } from './reducers/mealReducer'


const store = createStore (
  combineReducers( {
    form: reduxFormReducer, // mounted under "form"
    auth: authReducer,
    protectedData: protectedDataReducer,
    meal: mealReducer
  }),
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}
export default store;
