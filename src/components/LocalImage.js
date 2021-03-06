import React, { Component } from 'react';
import { View, Text, Image, Dimensions  } from 'react-native';

const LocalImage = ({source, originalWidth, originalHeight}) => {
    let windowWidth = Dimensions.get("window").width
    // if(columns){
    //     windowWidth = (Dimensions.get("window").width)/columns
    // } else {
    //     windowWidth = (Dimensions.get("window").width)
    // }
    let widthChange = (windowWidth-20)/originalWidth
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * widthChange
    return (
       <Image source={source} style={{width: newWidth, height: newHeight}}/>
    )
}

export default LocalImage;
