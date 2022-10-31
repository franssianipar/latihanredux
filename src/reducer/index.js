import {combineReducers} from 'redux';
import albumReducer from './albumReducer';
import detailReducer from './detailReducer';
import movieReducer from './movieReducer';
import todosReducer from './todosReducer';
import userReducer from './userReducer';


export default combineReducers ({
    user:userReducer,
    todos:todosReducer,
    album:albumReducer,
    movie:movieReducer,
    detail:detailReducer
 
})