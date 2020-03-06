import React, {Component} from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  Image,
  FlatList,
  Modal,
  StyleSheet,
  ScrollView,
} from 'react-native';
import styles from './WelcomeStyle';
import {Block, CustomButton, CustomText, Loader} from '../../../Component';
import {color, sizes} from 'app/Theme';
const {width, height} = Dimensions.get('window');
import {bikeshop, events, record} from 'app/assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import ItemView from './ItemView';
import {Button} from 'native-base';

const backgrounds = [
  {
    title: 'Medical record',
    description: 'Checking your health and speed while you bike.',
    img: record,
  },
  {
    title: 'More events',
    description: 'Explore every events and find it yours.',
    img: events,
  },
  {
    title: 'Bike shop',
    description: 'Get your spare part for your bike',
    img: bikeshop,
  },
];

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
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
        data={backgrounds}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({item}) => <ItemView item={item} />}
        onScroll={Animated.event([
          {
            nativeEvent: {contentOffset: {x: this.scrollX}},
          },
        ])}
      />
    );
  }

  renderSteps() {
    // const { illustrations } = this.props;
    const stepPosition = Animated.divide(this.scrollX, width);
    return (
      <Block
        flex={false}
        row
        center
        middle
        style={{
          right: 0,
          left: 0,
        }}>
        {backgrounds.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });

          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color="#8E9DFD"
              style={[
                {
                  width: wp('2.5'),
                  height: wp('2.5'),
                  borderRadius: wp('2.5'),
                  marginHorizontal: 2.5,
                },
                {opacity},
              ]}
            />
          );
        })}
      </Block>
    );
  }

  render() {
    const {navigation} = this.props;
    return (
      <Block color="#f3f3f2">
        {this.renderIllustrations()}
        {this.renderSteps()}
        <Block middle flex={0.5} margin={[0, 12 * 2]}>
          <Button
            block
            style={{borderRadius: 6, backgroundColor: '#FFAE54'}}
            onPress={() => navigation.navigate('LoginScreen')}>
            <CustomText header center semibold white>
              Login
            </CustomText>
          </Button>
          <Button
            block
            style={{
              borderRadius: 6,
              marginTop: 15,
              backgroundColor: '#1D7AA3',
            }}
            onPress={() => navigation.navigate('RegisterScreen')}>
            <CustomText header center semibold white>
              Signup
            </CustomText>
          </Button>
          <Button
            full
            transparent
            style={{
              marginTop: 10,
            }}>
            <CustomText body semibold gray2>
              Terms of service
            </CustomText>
          </Button>
        </Block>
      </Block>
    );
  }
}

export default WelcomeScreen;
