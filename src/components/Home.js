import React from 'react';
import {Container, Card, Text, View, Spinner} from 'native-base';
import {Image} from 'react-native';
import { Dimensions, StyleSheet } from "react-native";
import {getAll} from '../actions/allActions';
import {resetRefresh} from '../actions/allActions';
import {connect} from 'react-redux';
import { withNavigation } from "react-navigation";
import {Actions} from 'react-native-router-flux';


class Home extends React.Component{
    
    componentDidMount(){
        console.log('MOUNT HOME');
        this.props.getAll();
    }

    componentDidUpdate(){
        if(this.props.refresh){
            this.props.resetRefresh();
            this.props.getAll();
        }
    }

    render(){
        var width = Dimensions.get('window').width; //full width
        var height = Dimensions.get('window').height; //full height

        const {all} = this.props.homeAll;
        const loading = this.props.loading;
        
        let total = all.length == 0 ?  '' : all[0].confirmed;
        let recovered = all.length == 0 ? '' :  all[0].recovered;
        let deaths = all.length == 0 ? '' : all[0].deaths;

        return(
            <View style={{height: height}}>
                {this.props.loading ? <Spinner color="red"/>: null} 
                <Container style={{margin: 10}}>
                    <Image source={require('../../assets/world.png')} style={{width: width-30, height: height/2}}/>
                    <Card style={{padding: 20}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>Total de Casos: {total}</Text>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>Total Recuperados: {recovered}</Text>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>Total de Mortes: {deaths}</Text>
                    </Card>
                </Container>
            </View>
        );
    }
    
}
const mapStateToProps = (state) => {
    console.log(state.all.isRefresh)
    return{
        homeAll: state.all,
        loading: state.all.loading,
        refresh: state.all.isRefresh
    };
}

export default withNavigation(connect(mapStateToProps, {getAll, resetRefresh})(Home));