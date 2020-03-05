import React, { Component } from 'react';
import { Container } from 'native-base';
import Navigation from "./Navigation";

class Containers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: true
        }
    }

    render() {
        return (
            <Container>
                <Navigation />
            </Container>
        );
    }

}

export default Containers;