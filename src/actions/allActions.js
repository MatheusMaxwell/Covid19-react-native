import {GET_ALL, GET_ALL_ERROR, RESET} from '../types';
import axios from 'axios';

export const resetRefresh = () => dispatch =>{
    dispatch({
        type: RESET,
        refresh: false
    });
}

export const getAll =() => async dispatch => {
    try{
        const options = {
            method: 'GET',
            url: 'https://covid-19-data.p.rapidapi.com/totals',
            headers: {
              'x-rapidapi-key': 'c4818552efmshf898f6bd9af30dcp1c49e0jsn0d88ded18141',
              'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
            }
          };
        await axios.request(options).then(res => {
            if(res.status == 200){
                console.log('REQUEST ALL');
                dispatch({
                    type: GET_ALL,
                    payload: res.data,
                    loading: false
                });
            }
            else{
                dispatch({
                    type: GET_ALL_ERROR,
                    payload: null,
                    loading: false
                })
            }
            
        });
    }
    catch (err) {
        dispatch({
            type: GET_ALL_ERROR,
            payload: console.log(err),
            loading: false
        })
    }
}
