import React, {Component} from 'react';
import { StyleSheet, Text, View,  Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import TextInputs from './src/components/TextInput/TextInputs';
import PlacesOutput from './src/components/PlacesOutput/PlacesOutput';

export default class App extends Component {

  state={
    placeName: '',
    places: []
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  }

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === ""){
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    })
  }

  render() {
    
    return (
      <View style={styles.container}>
        <TextInputs value={this.state.placeName} 
                   changeText={this.placeNameChangedHandler}
                   PressButton={this.placeSubmitHandler} />
        <PlacesOutput places={this.state.places} />      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listContainer: {
    width: "100%"
  }

});
