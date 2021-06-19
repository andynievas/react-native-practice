
import React, { Component } from "react";
import { Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, Alert } from "react-native";
import PlayerView from "./playerView";
import { FontAwesome5 } from '@expo/vector-icons';



export default class ModalPrueba extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  alerta = (title, msg) => {
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

  render() {
    const { modalVisible } = this.state;
    const { musicData } = this.props;
    return (
      <View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            {/* <Text style={styles.modalText}>Hello World!</Text> */}
            <Pressable
              style={ styles.buttonClose }
              onPress={() => {
                this.props.hideStatusBar();
                this.setModalVisible(!modalVisible);
              }}
            >
              <FontAwesome5 name="angle-down" style={ [styles.textStyle, {fontSize: 30, } ] } />
            </Pressable>
            <PlayerView musicData={ this.props.musicData } />
          </View>
        </Modal>
        <View style={styles.actualSongArea} >
          <Pressable
            style={ [ {paddingLeft: 20, }, styles.buttonOpen] }
            onPress={() => {
              this.props.hideStatusBar();
              this.setModalVisible(true);
            }}
          >
            <Text style={styles.textStyle}>{musicData.songTitle}</Text>
          </Pressable>
          <TouchableOpacity style={{ height: '100%', paddingHorizontal: 30, justifyContent: 'center', }} onPress={ ()=>{this.alerta("Pausa", "Este boton pausa la musica")} } ><FontAwesome5 style={ styles.playControlBtnIcon } name="pause" /></TouchableOpacity>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  modalView: {
      flex: 1,
      backgroundColor: "rgb(19,28,38)",
      padding: 10,
      // shadowColor: "#000",
      // shadowOffset: {
      //   width: 0,
      //   height: 2
      // },
      shadowOpacity: 0,
      elevation: 10,
  },
  actualSongArea: {
    height: 60,
    backgroundColor: "black",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    // minHeight: 80,
    padding: 28,
  },
  buttonOpen: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonClose: {
      backgroundColor: "transparent",
      width: 60,
      height: 60,
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
  },
  textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
  },
  playControlBtnIcon: {
    color: 'white',
    fontSize: 20,
  },
  });  