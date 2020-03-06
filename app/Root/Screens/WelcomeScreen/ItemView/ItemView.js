import React, {Component} from 'react';
import {Dimensions, Image} from 'react-native';
import {Block, CustomText} from 'app/Component';
import {color, sizes} from 'app/Theme';
const {width, height} = Dimensions.get('window');
import {bikeshop, events, record} from 'app/assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class ItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {item} = this.props;
    return (
      <Block style={{padding: 20}} style={{width}}>
        <Block center bottom flex={0.4}>
          <CustomText primary h1 center bold>
            {item.title}
          </CustomText>
          <CustomText h3 gray2 style={{marginTop: 12, textAlign: 'center'}}>
            {item.description}
          </CustomText>
        </Block>
        <Block center middle>
          <Image
            source={item.img}
            resizeMode="contain"
            style={{
              width: wp('65'),
              height: wp('60'),
              overflow: 'visible',
            }}
          />
        </Block>
      </Block>
    );
  }
}
