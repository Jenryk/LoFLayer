import React from  'react';
import {StyleSheet,  View } from 'react-native';
import {Title, Artist, Player} from './Player'
export function Root(){
    return(
        <View style={styles.container}>
            <Title/>
            <Player/>
            <Artist/>
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


