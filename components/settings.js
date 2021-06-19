
import React from 'react';
import { View, Switch, Text } from 'react-native';
import Slider from '@react-native-community/slider';


class PruebaS extends React.Component{
    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    state = {
      value: false
    }
  
    render(){
      return (
        <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center', } }>
          <Switch
            trackColor={{ false: "rgb(240,240,200)", true: "rgb(100,240,100)" }}
            thumbColor={ "rgb(190,190,190)" }
            ios_backgroundColor="red"
            onValueChange={ ()=>{ this.setState({value: !this.state.value}) } }
            value={ this.state.value }
          />
  
        <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#222"
          />
  
        </View>
      );
    }
  }

export default class Settings extends React.Component {
    render(){
      return <View>
        <Text style={{ color: 'rgb(200,200,200)', fontSize: 40, fontWeight: 'bold', }} >Settings</Text>
        <PruebaS />
      </View>;
    }
  }