import React from  'react';
import {StyleSheet,  View } from 'react-native';
import {Album} from './Player'
export function Root(){
    return(
        <View style={styles.container}>
            <Album/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    }
});


