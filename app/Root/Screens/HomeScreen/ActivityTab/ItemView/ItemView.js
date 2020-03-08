import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './ItemViewStyle';
import { Card, Thumbnail, } from 'native-base'
import { bike, done, pin, pending, star } from 'app/assets';
import { CustomText } from 'app/Component';

export default class ItemView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const { item, style, isTime, onClick, getDirection } = this.props;
        const inputStyles = [
            styles.container,
            style
        ];
        return (
            <View style={{}}>
                <Card style={inputStyles}>
                    <Image source={bike} style={styles.bikeImg} />
                    <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginTop: 5 }}>
                        <CustomText bold style={styles.tittle}>{item.tittle}</CustomText>
                        <Image source={item.status == 'done' ? done : pending} style={styles.doneImg} />
                    </View>
                    <CustomText h3 style={styles.captain}>{item.time}</CustomText>
                    {item.pin &&
                        <Image source={pin} style={styles.pinImg} />
                    }
                </Card>
            </View>
        );
    }
}
