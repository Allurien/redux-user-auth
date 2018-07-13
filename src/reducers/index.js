import {combineReducers} from 'redux';
import userReducer from './user-reducer';
import movieReducer from './movie-reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    movie: movieReducer,
    user: userReducer,
    form: formReducer
})
export default rootReducer;