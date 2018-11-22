import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Boat from "../assets/boat.png";
import Plane from "../assets/plane.png";
import Car from "../assets/car.png";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.boxContainer, styles.boxOne]}>
                    <Image source={Plane} style={styles.icon}/>
                    <Image source={Plane} style={styles.icon}/>
                </View>
                <View style={[styles.boxContainer, styles.boxTwo]}>
                    <Image source={Car} style={styles.icon} />
                    <Image source={Car} style={styles.icon} />
                </View>
                <View style={[styles.boxContainer, styles.boxThree]}>
                    <Image source={Boat} style={styles.icon} />
                    <Image source={Boat} style={styles.icon} />
                    <Image source={Boat} style={styles.icon} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    boxContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxOne: {
        flex: 3, //3:6
        backgroundColor: '#80deea',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    boxTwo: {
        flex: 1, //1:6
        flexDirection: 'row',
        backgroundColor: '#e0f7fa',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    boxThree: {
        flex: 2, //2:6
        flexDirection: 'row',
        backgroundColor: '#0288d1',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    icon: {
        height: 120,
        width: 120
    }
})

export default Index;
