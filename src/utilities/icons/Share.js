import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <Icon name="ios-send" size={30} color="#616161"/>
    );
  }
}

export default Share;
