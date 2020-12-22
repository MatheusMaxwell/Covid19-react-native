import React from 'react';
import {View} from 'native-base';
import {Image} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default function Splash(){
    setTimeout(function(){
        Actions.replace('tabs');
      }, 2000);
    return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Image source={require('../../assets/worldgif.gif')} style={{height: 100, width: 100}}/>
        </View>
    );
}