import {
    FILTER_CARS_WITH_CATEGORY_ID,
    SET_CAR_CATEGORIES,
    SET_VEHICLES,
    FILTER_CARS_WITH_ID
} from '../actions/types';

const INITIAL_STATE = {
    categories: [],
    vehicles:[],
    filteredCars: [],
    vehicleById: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_VEHICLES:
            return {
                ...state,
                vehicles: action.payload
            };
        case SET_CAR_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case FILTER_CARS_WITH_CATEGORY_ID:
            var filteredCars = [];
            state.vehicles.map(vehicle => {
                if(vehicle.categories == action.payload){
                    filteredCars.push(vehicle);
                }
            });
            return {
                ...state,
                filteredCars
            };
        case FILTER_CARS_WITH_ID:
            var vehicleById = [];
            state.vehicles.map(vehicle => {
                if(vehicle._id == action.payload){
                    
                    vehicleById.push(vehicle);
                }
            });
            return {
                ...state,
                vehicleById
            };
        default: return state;
    };
}