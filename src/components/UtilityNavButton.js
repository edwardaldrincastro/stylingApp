import React, { Component } from 'react';
import {
    Back,
    Heart,
    More,
    Share
} from "../utilities/icons";

class Pin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        switch (this.props.icon) {
            case "Back":
                return <Back />
            case "Heart":
                return <Heart />
            case "More":
                return <More />
            case "Share":
                return <Share />
            default:
            return "No icon"
        }
    }
}

export default Pin;
