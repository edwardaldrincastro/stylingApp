import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import UtilityNavButton from "./UtilityNavButton";
import Button from "./Button";
import LocalImage from "./LocalImage";


let windowWidth = Dimensions.get("window").width

class Pin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={[styles.PinContainer, {width: windowWidth/this.props.columns}]}>
                <View style={styles.PinHeader}>
                    <View style={styles.UtilityNav}>
                        <UtilityNavButton icon="Back" />
                        <UtilityNavButton icon="Heart" />
                        <UtilityNavButton icon="Share" />
                        <UtilityNavButton icon="More" />
                    </View>
                    <View style={styles.PinButtonContainer}>
                        <Button red icon text="Save"/>
                    </View>
                </View>

                <View style={styles.PinContent}>
                    <LocalImage source={this.props.pinsource.imageSource}
                    originalWidth={this.props.pinsource.originalWidth}
                    originalHeight={this.props.pinsource.originalHeight}
                    columns={this.props.columns}/>
                </View>

                <View style={styles.PinMeta}>
                    <View style={styles.PinMetaTextContainer}>
                        <Text style={styles.PinMetaText}>Saved from</Text>
                        <Text style={[styles.PinMetaText, styles.TextBold]}>website.com</Text>
                    </View>
                    <Button text="Watch"/>
                </View>

                <View style={styles.PinUser}>
                    <View style={styles.PinUserAvatar}>
                    </View>
                    <View style={styles.PinUserContainer}>
                        <Text style={styles.PinUserText}>
                            <Text style={styles.TextBold}>User Name </Text>
                            saved to
                            <Text style={styles.TextBold}> Space</Text>
                        </Text>
                        <Text style={styles.PinUserText}>Description Lorem Ipsum</Text>
                    </View>
                </View>


            </View>
        );
    }
}

export default Pin;

const styles = StyleSheet.create({
    PinContainer: {
        // flex: 1,
        // backgroundColor: '#cecece',
        // alignSelf: 'stretch',
    },
    PinHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        minHeight: 50,
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    UtilityNav: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    PinButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // alignItems: 'center'
    },
    PinContent: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
        backgroundColor: '#fff',
    },
    ImagePlaceHolder: {
        flex: 1,
        backgroundColor: '#000',
        alignSelf: 'stretch',
        borderRadius: 6
    },
    PinMeta: {
        // flex: 1,
        minHeight: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingVertical: 16,
        paddingHorizontal: 10
    },
    PinMetaTextContainer: {
    },
    PinMetaText: {

    },
    PinUser: {
        flex: 5,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 8
    },
    PinUserAvatar: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        borderRadius: 25,
        marginRight: 10,
    },
    PinUserContainer: {
        flex: 1,
    },
    PinUserTextContainer: {

    },
    PinUserText: {

    },
    TextBold: {
        fontWeight: 'bold'
    },
})