import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PinIcon } from "../utilities/icons";
import UtilityNavButton from "./UtilityNavButton";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let bgcolor, textWeight, textColor
        if(this.props.red){
            bgcolor = "#b71c1c"
            textColor = "#fff"
        } else {
            bgcolor = "#bdbdbd"
            textColor = "#424242"
            textWeight = "bold"
        }
        return (
            <View style={[styles.PinButton, {backgroundColor: bgcolor}]}>
                {this.props.icon && <PinIcon/>}
                <Text style={[styles.PinButtonText, {color: textColor, fontWeight: textWeight}]}>{this.props.text}</Text>
            </View>
        );
    }
}

export default Button;

const styles = StyleSheet.create({
    PinButton: {
        flexDirection: 'row',
        backgroundColor: '#b71c1c',
        padding: 6,
        alignItems: 'center',
        borderRadius: 6
    },
    PinButtonText: {
        fontSize: 16,
        padding: 5,
        color: '#fff'
    },

})