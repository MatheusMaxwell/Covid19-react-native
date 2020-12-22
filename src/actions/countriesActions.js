import {GET_COUNTRIES, GET_COUNTRIES_ERROR, SET_REFRESH} from '../types';
import axios from 'axios';

export const setRefresh =() => dispatch =>{
    dispatch({
        type: SET_REFRESH,
        refresh: true
    });
}

export const getCountries =() => async dispatch => {
    try{
        const options = {
            method: 'GET',
            url: 'https://restcountries.eu/rest/v2/all'
          };
        await axios.request(options).then(res => {
            if(res.status == 200){
                console.log('REQUEST');
                dispatch({
                    type: GET_COUNTRIES,
                    payload: res.data,
                    loading: false
                });
            }
            else{
                console.log('ERRO COUNTRIES::'+res.data);
                dispatch({
                    type: GET_COUNTRIES_ERROR,
                    payload: [],
                    loading: false
                })
            }
            
        });
    }
    catch (err) {
        console.log('ERRO COUNTRIES::'+err);
        dispatch({
            type: GET_ALL_ERROR,
            payload: [],
            loading: false
        })
    }
}
