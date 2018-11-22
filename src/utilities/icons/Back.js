import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

class Back extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <Icon name="ios-arrow-back" size={30} color="#616161"/>
    );
  }
}
export default Back;
