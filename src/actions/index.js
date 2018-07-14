import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';

export function signIn(userInfo){
    return async (dispatch) => {
        try {
            const resp = await axios.post(`${BASE_URL}/signin`, userInfo)
            localStorage.setItem('token', resp.data.token);
            dispatch({type: types.SIGN_IN});
        } catch(err){
            console.log('error signing in', err.message);
        }
    }   
}

export function signOut(){
    localStorage.removeItem('token');
    return{
        type: types.SIGN_OUT
    }   
}
export function createAccount(userInfo){
    return async (dispatch) => {
        try{
            const resp = await axios.post(`${BASE_URL}/signup`, userInfo);
            console.log('Sign Up Response:', resp);
            localStorage.setItem('token', resp.data.token);
            dispatch({type: types.SIGN_UP});
        } catch(err){
            console.log('error signing up', err.message);
        }
        
        
    }
}
export function getMovieQuote(){
    return async dispatch => {
        try{
            const axiosConfig = {
                headers: {
                    authorization: localStorage.getItem('token')
                }
            }
            const resp = await axios.get(BASE_URL, axiosConfig);
            console.log('quote resp:', resp);
            dispatch({
                type: types.GET_MOVIE_QUOTE,
                quote: resp.data.message
            });
        } catch(err){
            console.log('error getting quote', err.message);
        }
    }
}