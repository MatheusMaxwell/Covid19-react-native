import {GET_ALL, GET_COUNTRIES, GET_COUNTRY, RESET, SET_REFRESH} from '../types';

const initialState ={
    all:[],
    loading: true,
    isRefresh: true
};

export default function (state = initialState, action){
    switch(action.type){
        case GET_ALL:
            return{
                ...state,
                all: action.payload,
                loading: false,
                isRefresh: true
            };
        case GET_COUNTRIES:
            return{
                ...state,
                countries: action.payload,
                loading: false,
                isRefresh: true
            };
        case GET_COUNTRY:
            return{
                ...state,
                country: action.payload,
                loading: false,
                isRefresh: true
            }
        case RESET:
            return{
                ...state,
                isRefresh: false
            }
        case SET_REFRESH:
            return{
                ...state,
                isRefresh: true
            }
        default: return state;
    }
}