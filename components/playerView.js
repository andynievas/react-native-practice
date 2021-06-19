
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';



function ImgPlayer(props){
  const musicData = props.musicData;
  console.log(musicData.imageURL);
  return (
    <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'space-around' }} >
      {/* <View style={{ flex: 1, width: '100%', maxWidth: 500, flexDirection: 'row', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} > */}
        {/* <Text style={{ color: 'black' }} >Imagen de {musicData.songTitle}</Text> */}
        <Image style={{width: '100%', height: '100%', }} source={{uri: musicData.imageURL}} />
      {/* </View> */}
      <View style={{ backgroundColor: 'red', height: 60, justifyContent: 'center', }} ><Text style={{ color: 'white', fontSize: 30, }} >{musicData.songTitle}</Text></View>
    </View>);
}

function AudioControl(){

  let alerta = (title, msg) => {
    Alert.alert(
      title,
      msg,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  };

  // <View style={{backgroundColor: 'rgba(20,20,20,0.3)', height: '30%', paddingLeft: 10, paddingRight: 10}} >
  
  return <View style={{ flex: 1, minWidth: 300, width: '100%', maxWidth: 600, marginHorizontal: 'auto', }} >
    <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', }} >
          <Slider //https://github.com/callstack/react-native-slider
            style={{ width: '80%', height: 60}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#222"
          />
        </View>
    <View style={ styles.audioControl } >
        <TouchableOpacity style={ styles.playControlBtn }  >
          <FontAwesome5 style={ [styles.playControlBtnIcon, {color: 'grey',}] } name="random" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.playControlBtn} onPress={ ()=>{alerta("Prev", "Previous song")} } >
          <FontAwesome5 style={styles.playControlBtnIcon} name="step-backward" />
        </TouchableOpacity>

        <TouchableOpacity style={ [styles.playControlBtn, styles.playControlBtnPlay] } onPress={ ()=>{alerta("Play", "Play/Pause song")} } >
          <FontAwesome5 style={ [styles.playControlBtnIcon, {color: 'black',}] } name="play" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.playControlBtn} onPress={ ()=>{alerta("Next", "Next song")} } >
          <FontAwesome5 style={styles.playControlBtnIcon} name="step-forward" />
        </TouchableOpacity>

        <TouchableOpacity style={ [styles.playControlBtn, {backgroundColor: 'transparent',}] }  >
          <FontAwesome5 style={ [styles.playControlBtnIcon, {color: 'grey',}] } name="retweet" />
        </TouchableOpacity>

      </View></View>;
}
/* <Image source ={imagen}
  style = {{ width: 200, height: 200, backgroundColor: 'red' }}
/> */

export default class PlayerView extends Component{

  // static propTypes = { // npm install prop-types
  //   changeStatusBarVisibility: this.propTypes.func
  // }

  render(){
    const {musicData} = this.props;
    return (
      <View style={styles.playerView} >
        <ImgPlayer musicData={musicData} />
        
        <AudioControl/>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  playerView:{
    // height: '100%',
    flex: 1,
  },
  audioControl: {
    backgroundColor: 'rgba(20,20,20,0.6)',
    minHeight: 70,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  playControlBtn: {
    backgroundColor: "transparent",
    borderRadius: 35,
    minWidth: 50,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playControlBtnPlay: {
    color: 'black',
    backgroundColor: "white",
    minWidth: 70,
    minHeight: 70,
  },
  playControlBtnIcon: {
    color: 'white',
    fontSize: 20,
  },
});