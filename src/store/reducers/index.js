// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menuSlice';
import login from './loginSlice';
import user from './userSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, login, user });

export default reducers;
