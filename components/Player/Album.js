import React, {useState} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {styles} from './styles'
import LofiGirl from '../../assets/images/lofi_girl.png';
import images from '../img/index'
export function Album() {
    const [songState, setSongState] = useState(images.pause);
    

    return(
        <View>
            <Image source={LofiGirl} style={styles.albumStyle}></Image>
            <TouchableOpacity style={styles.playerButton} onPress={changeState}>
                <Image source={songState} style={styles.playerButton}></Image>
            </TouchableOpacity>
        </View>
    )

    function changeState(){
        if(songState == images.pause){
            setSongState(images.play)
        }
        else{
            setSongState(images.pause)
        }
        
    }

}

