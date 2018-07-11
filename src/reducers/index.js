import {combineReducers} from 'redux';
import userReducer from './user-reducer';
import movieReducer from './movie-reducer';

const rootReducer = combineReducers({
    movie: movieReducer,
    user: userReducer
})
export default rootReducer;