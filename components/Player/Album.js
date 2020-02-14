import React, {useState} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {styles} from './styles'
import LofiGirl from '../../assets/images/lofi_girl.png';
import images from '../img/index';
import {Audio} from 'expo-av'
import { render } from 'react-dom';
export class Album extends React.Component{
    state = {
        songState: images.play,
        soundObject: null,
        soundStatus: null
    }
    async componentDidMount(){
        const { sound: soundObject, status } = await Audio.Sound.createAsync({
            uri: 'http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3'
        })
        this.setState({
            soundObject: soundObject,
            soundStatus: status
        })
    }
    onPressPlay = async () => {

            let status = await this.state.soundObject.getStatusAsync()
            if(this.state.songState == images.play && !this.state.soundStatus.isPlaying){
                await this.state.soundObject.playAsync();
                this.changeState()
            }
            else if(this.state.songState == images.pause){
                await this.state.soundObject.stopAsync();
                this.changeState()
            }
            
            
            
            // Your soud is playing!
          } 
    

    changeState = () => {
        if(this.state.songState == images.play){
            this.setState({songState: images.pause})
        }
        else{
            this.setState({songState: images.play})
        }
    }
    render(){
        
        return (
            <View>
                <Image source={LofiGirl} style={styles.albumStyle}></Image>
                    <TouchableOpacity onPress={this.onPressPlay}style={styles.playerButton}>
                <Image source={this.state.songState}style={styles.playerButton}></Image>
            </TouchableOpacity>
            </View>)
    }
  

}

