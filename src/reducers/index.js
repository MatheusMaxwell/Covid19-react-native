import { exp } from 'react-native-reanimated';
import {combineReducers} from 'redux';
import allReducer from './allReducer';
import countriesReducer from './countriesReducer';
import countryReducer from './countryReducer';

export default combineReducers({
    all: allReducer,
    countries: countriesReducer,
    country: countryReducer,
});