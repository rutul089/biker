import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import styles from './SplashScreenStyle';
import { splashlogo } from 'app/assets';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
    }

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        )
    }

    async componentDidMount() {
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
            try {
                this._navigateToScreen('WelcomeScreen');
            } catch (errr) {
                this._navigateToScreen('WelcomeScreen');
            }
        } else
            this._navigateToScreen('WelcomeScreen'); {
        }
    }

    _navigateToScreen(screen) {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: screen,
                }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <View style={styles.container1}>
                <Image
                    source={splashlogo}
                    style={styles.imageStyle}
                />
            </View>
        );
    }
}

export default SplashScreen;