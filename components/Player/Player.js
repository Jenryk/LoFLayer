import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { Album } from './Album'
import NextIcon from '../../assets/images/next.png'
import { styles } from './styles'
export function Player() {
    return(
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Image source={NextIcon} style={styles.previousButton}></Image>
            <Album></Album>
            <Image source={NextIcon} style={styles.nextButton}/>
        </View>
    )
}
