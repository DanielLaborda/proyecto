import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import cars from './carsReducer';

const rootReducer = combineReducers({
  form,
  cars
});

export default rootReducer;