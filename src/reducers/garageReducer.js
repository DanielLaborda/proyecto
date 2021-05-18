import {
    SET_GARAGE_INFO
} from '../actions/types';

const INITIAL_STATE = {
    garageInfo: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_GARAGE_INFO:
            return {
                ...state,
                garageInfo: action.payload
            }
    
        default: return state;
    }
}