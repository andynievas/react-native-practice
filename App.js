
import React from 'react';
import { TouchableOpacity, TextInput, StatusBar, SafeAreaView, ScrollView, StyleSheet, Text, View, Switch } from 'react-native';
import HomeView from './components/home';
import ModalPrueba from './components/modal';
import Settings from './components/settings';
import History from './components/history';



// Proyecto para practicar: "Reproductor de musica"
// Esto es React Native, no existe 'div' ni otros elementos html, hay que usar componentes móviles

// Otra APP para practicar podria ser un anotador de truco

// Otra APP para practicar podria ser una app de cumpleaños

// color oscuro
// rgb(19,28,38)



class Buscar extends React.Component {

  render(){
    return <View>
      <Text style={{ color: 'rgb(200,200,200)', fontSize: 40, fontWeight: 'bold', }} >Search</Text>
      <TextInput
        style={{
          height: 38,
          margin: 12,
          borderWidth: 1,
          borderRadius: 20,
          borderColor: 'rgb(180,30,30)',
          color: 'rgb(200,200,200)',
          paddingLeft: 15,
          fontSize: 20,
        }}
        onChangeText={ ()=>{ } }
        clearTextOnFocus={false}
        placeholder="Que estás buscando"
        placeholderTextColor="rgb(180,30,30)"
        keyboardType="email-address"
        keyboardAppearance="dark"
      />
    </View>;
  }
}

class Biblioteca extends React.Component {

  render(){
    return <View>
      <Text style={{ color: 'rgb(200,200,200)', fontSize: 40, fontWeight: 'bold', }} >Biblioteca</Text>
      <TextInput
        style={{
          // height: 38,
          margin: 12,
          borderWidth: 1,
          borderRadius: 20,
          borderColor: 'red',
          color: 'white',
          paddingLeft: 15,
          fontSize: 20,
        }}
        onChangeText={ ()=>{ } }
        clearTextOnFocus={false}
        placeholder="Que estás buscando"
        placeholderTextColor="rgb(180,30,30)"
        keyboardType="email-address"
        keyboardAppearance="dark"
      />
    </View>;
  }
}

function Navigation(props){

  return <View style={styles.nav} >
    <TouchableOpacity style={ [ styles.navBtn, props.view=="inicio" ? styles.navBtnPressed : null ] } onPress={ ()=>{props.changeView("inicio")} } >
      <Text style={ [styles.navBtnText, props.view=="inicio" ? styles.navBtnTextPressed : null ] } >Inicio</Text>
    </TouchableOpacity>

    <TouchableOpacity style={ [ styles.navBtn, props.view=="buscar" ? styles.navBtnPressed : null ] } onPress={ ()=>{props.changeView("buscar")} } >
      <Text style={ [styles.navBtnText, props.view=="buscar" ? styles.navBtnTextPressed : null ] } >Buscar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={ [ styles.navBtn, props.view=="perfil" ? styles.navBtnPressed : null ] } onPress={ ()=>{props.changeView("perfil")} } >
      <Text style={ [styles.navBtnText, props.view=="perfil" ? styles.navBtnTextPressed : null ] } >Biblioteca</Text>
    </TouchableOpacity>
  </View>;
}

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      statusbar: false,
      view: "inicio",
      // hiddenPlayer: true,
      musicData: {
        author: "Elige una canción",
        id: 0,
        imageURL: "Elige una canción",
        songTitle: "Elige una canción",
      }
    }

    this.changeStatusBarVisibility = this.changeStatusBarVisibility.bind(this);
    this.changeViewS = this.changeViewS.bind(this);
    this.changeSong = this.changeSong.bind(this);
  }

  changeStatusBarVisibility = ()=>{
    if( this.state.statusbar ){
      this.setState({statusbar: false});
    }else this.setState({statusbar: true});
  }
  changeViewS = (vista)=>{
    this.setState({view: vista});
  }
  changeSong = (data)=>{
    console.log(data);
    this.setState({musicData: data});
  }

  render(){
    console.log("RENDER App en la vista " + this.state.view );
    // const { statusbar } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: 'purple', }} >
         <SafeAreaView
          style={ styles.main }
        >
          <StatusBar
              animated={true}
              backgroundColor='rgb(9,18,24)'
              barStyle={'light-content'}
              showHideTransition={'slide'}
              hidden={ this.state.statusbar } />

          <ScrollView >
            <View style={{ padding: 20,  }} >
              { this.state.view === "inicio" ? <HomeView action={this.changeSong} changeView={this.changeViewS} /> : null }
              { this.state.view === "buscar" ? <Buscar /> : null }
              { this.state.view === "perfil" ? <Biblioteca /> : null }
              { this.state.view === "configuration" ? <Settings /> : null }
              { this.state.view === "history" ? <History /> : null }
            </View>
          </ScrollView>

          <ModalPrueba musicData={ this.state.musicData } hideStatusBar={this.changeStatusBarVisibility} />

          <Navigation view={this.state.view} changeView={this.changeViewS} />

        </SafeAreaView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: 'space-around',
    backgroundColor: 'rgb(19,28,38)',
  },
  nav: {
    minHeight: 60,
    flexDirection: 'row',
    backgroundColor: 'rgb(19,28,38)',
  },
  navBtn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#17202a',
  },
  navBtnText: {
    color: 'rgb(140,140,140)',
    textAlign: 'center', 
  },
  navBtnPressed: {
    backgroundColor: '#050516',
  },
  navBtnTextPressed: {
    color: 'white'
  },
});
