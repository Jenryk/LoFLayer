import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import * as Font from 'expo-font'
import {Root} from './components/Root'
export default class App extends React.Component{
  state = {
    fontLoaded: false,
  };
  async componentDidMount(){
    await Font.loadAsync({
      'Montserrat' : require('./assets/fonts/Montserrat-Regular.ttf'),
      'Roboto' : require('./assets/fonts/Roboto-Regular.ttf')
    })
    this.setState({fontLoaded: true});
   }
  

  render(){
    return(
      <View style={styles.container}>
      {
          this.state.fontLoaded ? (<Root/>) : null
      }
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
});
