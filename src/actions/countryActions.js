import {GET_COUNTRY, GET_COUNTRY_ERROR} from '../types';
import axios from 'axios';
import AppSingleton from '../AppSingleton';

export const getCountry =() => async dispatch => {
    try{
        const options = {
            method: 'GET',
            url: 'https://covid-19-data.p.rapidapi.com/country/code',
            params: {code: AppSingleton.getInstance().getCountryCode()},
            headers: {
              'x-rapidapi-key': 'c4818552efmshf898f6bd9af30dcp1c49e0jsn0d88ded18141',
              'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
            }
          };
        await axios.request(options).then(res => {
            if(res.status == 200){
                console.log('REQUEST COUNTRUY');
                dispatch({
                    type: GET_COUNTRY,
                    payload: res.data,
                    loading: false
                });
            }
            else{
                dispatch({
                    type: GET_COUNTRY_ERROR,
                    payload: null,
                    loading: false
                })
            }
            
        });
    }
    catch (err) {
        dispatch({
            type: GET_COUNTRY_ERROR,
            payload: console.log(err),
            loading: false
        })
    }
}
