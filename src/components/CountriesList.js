import React from 'react';
import {Container, Header, Input, Icon, Item, Button, Text, Content, List, ListItem, Left, Thumbnail, Body, Right} from 'native-base';
import {getCountries, setRefresh} from '../actions/countriesActions';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import AppSingleton from '../AppSingleton';


class CountriesList extends React.Component {
    componentDidMount(){
        console.log('MOUNT COUNTRIES LIST');
        this.props.getCountries();
        this.props.setRefresh();
    }

    onPress(code, name){
        AppSingleton.getInstance().setCountryCode(code);
        AppSingleton.getInstance().setCountryName(name);
        Actions.push('country');
    }

    render() {
        const countries = this.props.countries;
        
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                    </Item>
                    <Button transparent>
                        <Text style={{color: 'red'}}>Buscar</Text>
                    </Button>
                </Header>
                {this.props.loading? <Spinner color="red"/>: null} 
                <Content>
                    <List dataArray={countries} renderRow={(item) => 
                        <ListItem avatar button={true} onPress={() => {this.onPress(item.alpha2Code, item.name)}}>
                                <Left>
                                    <Thumbnail source={{uri: 'https://www.countryflags.io/'+item.alpha2Code+'/shiny/64.png'}} />
                                </Left>
                                <Body>
                                    <Text>{item.name}</Text>
                                </Body>
                            </ListItem>
                        }
                        keyExtractor = {(item, index) => index.toString()}
                    />
                </Content>
            </Container>
        );
    }
    
}

const mapStateToProps = (state) => {
    return{
        countries: state.countries.all,
        loading: state.loading
    };
}

export default connect(mapStateToProps, {getCountries, setRefresh})(CountriesList);