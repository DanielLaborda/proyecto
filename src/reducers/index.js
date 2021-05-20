import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import cars from './carsReducer';
import garage from './garageReducer';
import racing from './racingReducer';

const rootReducer = combineReducers({
  form,
  cars,
  garage,
  racing
});

export default rootReducer;