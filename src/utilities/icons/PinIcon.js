import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

class PinIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <Icon name="thumbtack" size={24} color="#fff"/>
    );
  }
}
export default PinIcon;
