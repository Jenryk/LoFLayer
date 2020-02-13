import React, { useEffect, useState } from 'react';
import { Text, StyleSheet} from 'react-native';
import * as Font from 'expo-font'
import {Root} from './components/Root'
export default class App extends React.Component{
  componentDidMount(){
  Font.loadAsync({
      'Montserrat' : require('./assets/fonts/Montserrat-Regular.ttf'),
      'Roboto' : require('./assets/fonts/Roboto-Regular.ttf')
    })
   }
  

  render(){
    return(
      <Text>Could not load fonts sorry : /</Text>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
