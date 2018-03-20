import * as actions from  '../actions/users';

const initialState = {
  delete_error: null,
  delete_success: false
}

export const usersReducer = (state=initialState, action) => {
  if(action.type === actions.DELETEUSERACCOUNT_SUCCESS){
    return Object.assign({}, state, {
      delete_success: action.success,
      delete_error: null
    })
  }

  if(action.type === actions.DELETEUSERACCOUNT_FAILURE){
    return Object.assign({}, state, {
      delete_success: false,
      delete_error: action.error})
  }
  return state;
}