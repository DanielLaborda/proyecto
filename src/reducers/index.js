import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import cars from './carsReducer';
import garage from './garageReducer';

const rootReducer = combineReducers({
  form,
  cars,
  garage
});

export default rootReducer;