// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menuSlice';
import login from './loginSlice';
import user from './userSlice';
import registration from './registerSlice'
import recover from './recoverSlice'

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, login, user, registration, recover });

export default reducers;
