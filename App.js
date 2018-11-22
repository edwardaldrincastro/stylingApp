
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Index from "./src/screens/index";
import Pin from "./src/components/Pin";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: 2,

      pin: {
        cigarette: {
          imageSource: require('./src/assets/cigarette.jpg'),
          originalWidth: 3712,
          originalHeight: 4640,
        },
        graffiti: {
          imageSource: require('./src/assets/graffiti.jpg'),
          originalWidth: 4272,
          originalHeight: 2848,
        },
        greece: {
          imageSource: require('./src/assets/greece.jpg'),
          originalWidth: 6240,
          originalHeight: 4160,
        },
        sunset: {
          imageSource: require('./src/assets/sunset.jpg'),
          originalWidth: 334,
          originalHeight: 501,
        }
      }

    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Pin pinsource={this.state.pin.cigarette} columns={this.state.columns}/>
        <Pin pinsource={this.state.pin.graffiti} columns={this.state.columns} />
        {/* <Pin pinsource={this.state.pin.greece}  columns={this.state.columns} />  */}
         {/* <Pin pinsource={this.state.pin.sunset} />  */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF'

  }
});
