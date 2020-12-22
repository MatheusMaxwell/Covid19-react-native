import React from 'react';
import {Container, Card, Text} from 'native-base';
import {Image} from 'react-native';
import {connect} from 'react-redux';
import { Dimensions} from "react-native";

import AppSingleton from '../AppSingleton';
import {getCountry} from '../actions/countryActions';

class CountryDetail extends React.Component {

    componentDidMount(){
        console.log('MOUNT COUNTRY DETAIL');
        this.props.getCountry();
    }

    componentWillUnmount(){

    }

    render() {
        var width = Dimensions.get('window').width; //full width
        var height = Dimensions.get('window').height; //full height

        const countryCode = AppSingleton.getInstance().getCountryCode();
        const countryName = AppSingleton.getInstance().getCountryName();
        const country = this.props.country;
       
        let total = typeof(country) !== 'undefined' && country.length > 0 ? country[0].confirmed : '' ;
        let recovered = typeof(country) !== 'undefined' && country.length > 0 ? country[0].recovered : '';
        let deaths = typeof(country) !== 'undefined' && country.length > 0 ? country[0].deaths : '';
        return (
            <Container style={{padding: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 40, fontWeight: 'bold', marginTop: 10}}>{countryName}</Text>
                <Image source={{uri: 'https://www.countryflags.io/'+countryCode+'/shiny/64.png'}} style={{width: width-40, height: height/3}}/>
                <Card style={{padding: 20, width: width-40}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>Total de Casos: {total}</Text>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>Total Recuperados: {recovered}</Text>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>Total de Mortes: {deaths}</Text>
                    </Card>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('STATE');
    console.log(state);
    return{
        country: state.country.all,
        loading: state.loading
    };
}

export default connect(mapStateToProps, {getCountry})(CountryDetail);