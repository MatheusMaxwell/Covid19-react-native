import {GET_ALL, GET_COUNTRIES, GET_COUNTRY} from '../types';

const initialState ={
    countries:[],
    loading: true
};

export default function (state = initialState, action){
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                all: action.payload,
                loading: false
            };
        default: return state;
    }
}