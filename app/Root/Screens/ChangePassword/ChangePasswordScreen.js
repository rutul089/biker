import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './ChangePasswordStyle';
import { left, avtar } from 'app/assets';
import MainHeader from 'app/Component/MainHeader';
import { Block, EditText, CustomText, Switch } from 'app/Component';
import { Container } from 'native-base';

export default class ChangePasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <MainHeader
                    bodyContent={'Change Password'}
                    leftIcon={left}
                    backAction={() => {
                        this.props.navigation.goBack();
                    }}
                />
            </Container>
        );
    }
}
