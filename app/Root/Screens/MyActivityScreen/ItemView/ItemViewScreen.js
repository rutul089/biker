import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {bike, avtar} from 'app/assets';
import {Block, EditText, CustomText, Switch} from 'app/Component';
import {Card, CardItem, Thumbnail, Left, Body} from 'native-base';
import styles from './ItemViewStyle';

export default class ItemViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardItem style={{marginBottom: 0, paddingBottom: 0}}>
          <Left
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Thumbnail
              small
              source={avtar}
              style={{borderWidth: 1, borderColor: '#707070'}}
            />
            <Body>
              <CustomText header bold>
                Rutul Mehta
              </CustomText>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 3,
                }}>
                <Image source={bike} style={styles.bikeImgStyle} />
                <CustomText
                  gray2
                  caption
                  style={{textAlign: 'center', marginLeft: 10}}>
                  March 5,2020 at 9:22 AM
                </CustomText>
              </View>
            </Body>
          </Left>
        </CardItem>
        <CardItem
          style={{
            marginTop: 0,
            paddingTop: 10,
            marginBottom: 0,
            paddingBottom: 0,
          }}>
          <CustomText h3 bold style={{}}>
            Morning Ride
          </CustomText>
        </CardItem>
        <CardItem style={{paddingTop: 5}}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={{flex: 0.24}}>
              <CustomText gray2 caption>
                Distance
              </CustomText>
              <CustomText style={[{fontWeight: '600'}, styles.tittleStyle]}>
                2.31 mi
              </CustomText>
            </View>
            <View style={{backgroundColor: '#707070', margin: 8, width: 1}} />
            <View style={{flex: 0.22}}>
              <CustomText gray2 caption>
                Ekev Gain
              </CustomText>
              <CustomText style={[{fontWeight: '600'}, styles.tittleStyle]}>
                76 ft
              </CustomText>
            </View>
            <View style={{backgroundColor: '#707070', margin: 8, width: 1}} />
            <View style={{flex: 0.24}}>
              <CustomText gray2 caption>
                Time
              </CustomText>
              <CustomText style={[{fontWeight: '600'}, styles.tittleStyle]}>
                11m 54s
              </CustomText>
            </View>
            <View
              style={{
                flex: 0.3,
              }}>
              <CustomText gray2 caption style={{textAlign: 'right'}}>
                Achievements
              </CustomText>
              <CustomText
                style={[
                  {fontWeight: '600', textAlign: 'right'},
                  styles.tittleStyle,
                ]}>
                1
              </CustomText>
            </View>
          </View>
        </CardItem>
        <CardItem style={[{paddingTop: 5}, styles.mapStyle]} cardBody>
          <Image
            style={styles.mapStyle}
            source={{
              uri:
                'https://image.shutterstock.com/z/stock-photo-london-map-183462602.jpg',
            }}
          />
        </CardItem>
      </Card>
    );
  }
}
