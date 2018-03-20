import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export const registerUser = user => dispatch => {
    // console.log('checking API_BASE_URL value: ');
    // console.log(API_BASE_URL);
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const deleteUserAccount = user_id => dispatch => {
     console.log('checking user_id value: ');
     console.log(user_id);
    return fetch(`${API_BASE_URL}/users/${user_id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }  
    })
    .then(res => {
        dispatch(deleUserAccount_success(true));
        dispatch(clearAuth());
        clearAuthToken();
    })
    .catch(err => {
        dispatch(deleUserAccount_failure(err))
    });
};

export const DELETEUSERACCOUNT_SUCCESS = 'DELETEUSERACCOUNT_SUCCESS';
export const deleUserAccount_success = success => ({
    type: DELETEUSERACCOUNT_SUCCESS,
    success
});

export const DELETEUSERACCOUNT_FAILURE = 'DELETEUSERACCOUNT_FAILURE';
export const deleUserAccount_failure = error => ({
    type: DELETEUSERACCOUNT_FAILURE,
    error
})