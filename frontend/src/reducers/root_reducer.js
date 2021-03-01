import { combineReducers } from 'redux';
import session from './session_reducer.js';
import errors from './errors_reducer.js';
import entities from './entities/entities_reducer.js'
import ui from './ui_reducer';

const RootReducer = combineReducers({
  entities,
  errors,
  session,
  ui,
});

export default RootReducer;
