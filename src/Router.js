import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Home from './components/Home';
import Splash from './components/Splash';
import TabMenu from './components/TabMenu';
import Countries from './components/CountriesList';
import Country from './components/CountryDetail';

export default function RouterComponent(){
    return (
        <Router>
            <Stack key="root" navigationBarStyle={{ backgroundColor: 'red'}} titleStyle={{color: 'white', fontWeight: 'bold'}}>
                <Scene key="splash" component={Splash} initial hideNavBar={true}/>
                <Scene key="tabs" component={TabMenu}/>
                <Scene key="home" component={Home} title="Mundo" />
                <Scene key="countries" component={Countries}/>
                <Scene key="country" component={Country} backButtonTextStyle = {{color:'##fff'}}/>
            </Stack>
        </Router>
    );
}