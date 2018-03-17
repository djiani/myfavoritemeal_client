import {SET_AUTH_TOKEN, setAuthToken, CLEAR_AUTH, clearAuth, AUTH_REQUEST, authRequest,
        AUTH_SUCCESS, authSuccess, AUTH_ERROR, authError} from './auth';

describe('SET_AUTH_TOKEN', ()=>{
  it('should return action', ()=>{
    const authToken = 'sfklflflrkfkf';
    const action = setAuthToken(authToken);
    expect(action.type).toEqual(SET_AUTH_TOKEN);
    expect(action.authToken).toEqual(authToken);
  })
})

describe('CLEAR_AUTH', ()=>{
  it('should return action', ()=>{
    const action = clearAuth();
    expect(action.type).toEqual(CLEAR_AUTH);
  })
})

describe('AUTH_REQUEST', ()=>{
  it('should return action', ()=>{
    const action = authRequest();
    expect(action.type).toEqual(AUTH_REQUEST);
  })
})

describe('AUTH_SUCCESS', ()=>{
  it('should return action', ()=>{
    const action = authSuccess();
    expect(action.type).toEqual(AUTH_SUCCESS);
  })
})

describe('AUTH_ERROR', ()=>{
  it('should return action', ()=>{
    const error = 'error auth';
    const action = authError(error);
    expect(action.type).toEqual(AUTH_ERROR);
    expect(action.error).toEqual(error);
  })
})