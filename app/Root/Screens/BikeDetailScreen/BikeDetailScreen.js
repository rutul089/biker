import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, Image, Animated } from 'react-native';
import { left, avtar } from 'app/assets';
import MainHeader from 'app/Component/MainHeader';
import { Container, Content, Button } from 'native-base';
import { Log } from 'app/Utils';
import styles from './BikeDetailStyle';
import { Block, CustomButton, CustomText, Loader } from 'app/Component';
const screenWidth = Math.round(Dimensions.get('window').width);
import Carousel, { Pagination } from "react-native-snap-carousel";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating'

const MARGIN = 8
class BikeDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bike: {},
            length: 0,
            activeSlide: 1,
        };
    }

    componentDidMount() {
        const data = this.props.navigation.state.params
        this.setState({
            bike: data,
            length: data.images.length
        })
    }

    // -- render item for slider
    _renderItem(item) {
        return (<Image
            source={{ uri: item.item }}
            resizeMode="contain"
            style={styles.imageStyle}
        />)
    }

    //-- paggination
    get pagination() {
        const { length, activeSlide } = this.state;
        return (
            <Pagination
                containerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: 0,
                    right: 0,
                    top: -15,
                    left: 0
                }}
                firstItem={0}
                dotsLength={length}
                activeDotIndex={activeSlide}
                dotStyle={styles.dots}
                inactiveDotStyle={{}}
                inactiveDotOpacity={0.5}
                inactiveDotScale={.6}
            />
        );
    }

    //-- render slider
    renderGallary() {
        return (
            <View>
                <Carousel
                    containerCustomStyle={styles.containerCustomStyle}
                    data={this.state.bike.images}
                    firstItem={3}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                    loop={true}
                    autoplay={false}
                    layout={"default"}
                    renderItem={this._renderItem.bind(this)}
                    sliderWidth={screenWidth}
                    itemWidth={screenWidth}
                />
                {/* {this.pagination} */}
            </View>
        )
    }

    //-- handle buy click
    handleRentClick() {
        alert('Rent click')
    }
    render() {
        const { bike } = this.state;
        return (
            <Container>
                <MainHeader
                    bodyContent={'Bike Shop'}
                    leftIcon={left}
                    backAction={() => {
                        this.props.navigation.goBack();
                    }}
                />
                <Content>
                    {this.renderGallary()}
                    <View style={{ padding: 15 }}>
                        <View style={{ flexDirection: 'row', flex: 1, }}>
                            <CustomText bold style={{ flex: 0.6, fontSize: wp('5.2') }}>{bike.name}</CustomText>
                            <CustomText bold style={{ flex: 0.4, textAlign: 'right', fontSize: wp('5.2') }}>{'\u20B9'} {bike.price}</CustomText>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', marginTop: MARGIN }}>
                            <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={bike.rating}
                                starSize={18}
                                fullStarColor="#EBEB11"
                                emptyStar=''
                                starStyle={{ marginRight: 4 }}
                            />
                        </View>
                        <CustomText height={25} style={{ fontSize: wp('4.5'), marginTop: MARGIN, color: '#707070' }}>{bike.description}</CustomText>
                        <CustomText height={25} style={{ fontSize: wp('4.5'), marginTop: MARGIN * 2, color: '#707070' }}>
                            Only<CustomText bold style={{ fontSize: wp('4.7'), color: '#000' }}> {bike.stock}</CustomText> left in stock !</CustomText>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center', marginTop: MARGIN * 3,
                        }}>
                            <Button
                                style={{
                                    borderRadius: 6, backgroundColor: '#FFAE54',
                                    width: wp('50'), justifyContent: 'center',
                                }}
                                onPress={() => this.handleRentClick()}>
                                <CustomText h2 center semibold white>
                                    BUY
                         </CustomText>
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}
//4.5
export default BikeDetailScreen;
