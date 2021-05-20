import {
    SET_RACING_INFO
} from '../actions/types';

const INITIAL_STATE = {
    racingInfo: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_RACING_INFO:
            return {
                ...state,
                racingInfo: action.payload
            }
    
        default: return state;
    }
}