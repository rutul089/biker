import React, { Component } from 'react';
import {
    View, Text, Animated,
    Dimensions,
    Image,
    FlatList,
    Modal,
    StyleSheet,
    ScrollView
} from 'react-native';
import styles from './WelcomeStyle';
import { Block, CustomButton, CustomText, Loader } from '../../../Component';
import { color, sizes } from 'app/Theme';
const { width, height } = Dimensions.get("window");
import { connected, welcome, secure } from 'app/assets';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const backgrounds = [
    {
        title: "Secured, forever.",
        description:
            "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
        img: secure
    },
    {
        title: "Encrypted, forever.",
        description:
            "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
        img: welcome
    },
    {
        title: "Privacy, forever.",
        description:
            "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
        img: connected
    }
]


class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0
        };
    }


    scrollX = new Animated.Value(0);
    renderIllustrations() {
        // const { illustrations } = this.props;

        return (
            <FlatList
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                data={backgrounds}
                keyExtractor={(item, index) => `${item.id}`}
                renderItem={({ item }) => (
                    <Block style={{flex:1}}>
                        <Image
                            source={item.img}
                            resizeMode="contain"
                            style={{ width, height: height / 2, overflow: "visible" }}
                        />
                        <CustomText center style={{ textAlign: 'center', justifyContent: 'center', padding: 5 }}>{item.description}</CustomText>
                    </Block>

                )}
                onScroll={Animated.event([
                    {
                        nativeEvent: { contentOffset: { x: this.scrollX } }
                    }
                ])}
            />
        );
    }

    renderSteps() {
        // const { illustrations } = this.props;
        const stepPosition = Animated.divide(this.scrollX, width);
        return (
            <Block row center middle style={{
                position: "absolute",
                right: 0,
                left: 0
            }}>
                {backgrounds.map((item, index) => {
                    const opacity = stepPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.4, 1, 0.4],
                        extrapolate: "clamp"
                    });

                    return (
                        <Block
                            animated
                            flex={false}
                            key={`step-${index}`}
                            color="black"
                            style={[{
                                width: 5,
                                height: 5,
                                borderRadius: 5,
                                marginHorizontal: 2.5
                            }, { opacity }]}
                        />
                    );
                })}
            </Block>
        );
    }


    render() {
        return (
            <Block>
                {/* <Block>
                    <Image
                        source={secure}
                        resizeMode="contain"
                        style={{ width, height: height / 2, overflow: "visible", padding: 8 }}
                    />
                    <CustomText center style={{ textAlign: 'center', justifyContent: 'center', padding: 5 }}>Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.</CustomText>
                </Block> */}
                <Block center middle>
                    {this.renderIllustrations()}
                    {this.renderSteps()}
                </Block>
            </Block>
        );
    }
}

export default WelcomeScreen;
