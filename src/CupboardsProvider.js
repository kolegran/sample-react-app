import React, { Component } from "react";
import Cupboards from './Cupboards'

class CupboardsProvider extends Component {

    state = {
        cupboards: []
    };

    componentDidMount() {
        fetch('http://localhost:8080/cupboards')
            .then(result => result.json())
            .then(data => {
                this.setState({cupboards: data})
            })
            .catch(console.log)
    }

    render() {
        return (
            <Cupboards cupboards={this.state.cupboards} />
        );
    }
}

export default CupboardsProvider;