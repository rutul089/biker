import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './ItemStyle';
import { CustomText } from 'app/Component';
import { color, sizes } from 'app/Theme';
import { bikeshop, events, cycle1, direction, star } from 'app/assets';
import { Card, Thumbnail, } from 'native-base'
import StarRating from 'react-native-star-rating'

class ItemView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { item, isTime, onClick, getDirection } = this.props;
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.props.onClick && this.props.onClick(item)}
            >
                <View style={{ margin: 10 }}>
                    <Card style={{ backgroundColor: '#F5F5F5', padding: 8, borderRadius: 12 }}>
                        <View style={styles.container}>
                            <View style={{ flex: 0.25 }}>
                                <Thumbnail source={{ uri: item.img }} large square style={styles.imgStyle} />
                            </View>
                            <View style={{ marginStart: 15, flex: 0.55, justifyContent: 'center' }}>
                                <CustomText bold h2>{item.name}</CustomText>
                                <CustomText style={styles.note}>{item.address}</CustomText>
                                <View style={{ flexDirection: 'row', width: '100%', marginTop: 3 }}>
                                    <StarRating
                                        disabled={true}
                                        maxStars={5}
                                        rating={item.rating}
                                        starSize={17}
                                        fullStarColor="#EBEB11"
                                        emptyStar=''
                                        starStyle={{ marginRight: 4 }}
                                    />
                                </View>
                            </View>
                            <View style={{ marginStart: 5, flex: 0.2, justifyContent: 'center', }}>
                                <TouchableOpacity style={{ alignItems: 'center' }}
                                    onPress={() => this.props.getDirection && this.props.getDirection(item)}
                                >
                                    <Image source={direction}
                                        style={styles.direction}
                                    />
                                    <CustomText style={styles.directionText} >{item.distance} KM</CustomText>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {isTime && <View style={styles.timeContainer}>
                            <CustomText h2>{item.status}</CustomText>
                            <CustomText h2>{item.time}</CustomText>
                        </View>}
                    </Card>
                </View>
            </TouchableOpacity>
        );
    }
}

export default ItemView;
