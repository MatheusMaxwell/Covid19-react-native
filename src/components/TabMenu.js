import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';

import Tab1 from './Home';
import Tab2 from './CountriesList';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Tabs tabBarPosition='bottom'>
          <Tab heading={ <TabHeading><Icon name="home" /><Text>Mundo</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="menu" /><Text>Países</Text></TabHeading>}>
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}