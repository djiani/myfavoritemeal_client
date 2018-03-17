import reducer from './auth';
import {setAuthToken, clearAuth, authRequest, authSuccess, authError} from '../actions/auth';

describe('AuthReducer', ()=>{
  const initialState = {
    authToken: null, 
    currentUser: null,
    loading: false,
    error: null
  };

  it('Should set the initial state when nothing is passed in ', ()=>{
    const state = reducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual(initialState);
  })

  it('Should return the current state on an unknown action', () => {
    let currentState = initialState;
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
    });
  describe('setAuthToken', ()=>{
    it('should set authToken', ()=>{
      let state = initialState;
      const authToken = 'sjjdfrahe344jdjj';
      state = reducer(state, setAuthToken(authToken));
      expect(state.authToken).toEqual(authToken);
    })
  })

  describe('clearAuth', ()=>{
    it('should set authToken', ()=>{
      let state = {
        authToken: 'sjjdfrahe344jdjj',
        currentUser: 'sam',
        loading: false,
        error: null,
      };

      state = reducer(state, clearAuth());
      expect(state.authToken).toEqual(null);
      expect(state.currentUser).toEqual(null);
    })
  })

  describe('authRequest', ()=>{
    it('should set authToken', ()=>{
      let state = initialState;
      state = reducer(state, authRequest());
      expect(state.loading).toEqual(true);
      expect(state.error).toEqual(null);
    })
  })

  describe('authSuccess', ()=>{
    it('should set currentUser', ()=>{
      let state = initialState;
      let currentUser = {
        username: 'test', 
        firstName: 'test1', 
        lastName: 'lastName', 
        id: '5aa508ee36d1d92b50e5ba2a'
      };
      state = reducer(state, authSuccess(currentUser));
      expect(state.loading).toEqual(false);
      expect(state.currentUser).toEqual(currentUser);
    })
  })

  describe('authError', ()=>{
    it('should set error', ()=>{
      let state = initialState;
      let error = 'error occured';
      state = reducer(state, authError(error));
      expect(state.loading).toEqual(false);
      expect(state.error).toEqual(error);
    })
  })
})