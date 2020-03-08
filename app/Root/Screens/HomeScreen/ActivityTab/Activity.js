import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './ActivityStyle';
import MainHeader from 'app/Component/MainHeader';
import { temp, time, avtar, icBike, calendar, bikestore, peppole } from 'app/assets';
import { Block, CustomButton, CustomText, Loader } from 'app/Component';
import { Container, Content, Thumbnail } from 'native-base';
import ItemView from './ItemView';
import { agendas } from '../../../../mocks';

export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agendaList: agendas
    };
  }

  //-- renderHeader
  renderHeader() {
    return (
      <View style={styles.headerStyle}>
        <View style={{ flex: 0.6 }}>
          <CustomText h1 bold style={{ color: '#fff' }}>
            Hey , John kevin
            </CustomText>
          <CustomText h1 bold style={{ color: '#fff' }}>
            Good Morning
            </CustomText>
        </View>
        <View style={{ alignItems: 'flex-end', flex: 0.4 }}>
          <Thumbnail style={styles.avtarStyle} source={avtar} />
        </View>
      </View>
    )
  }

  //-- renderMiddleIcon
  renderMiddleIcon(source, tittle) {
    return (
      <TouchableOpacity style={styles.contanorStyle} activeOpacity={0.9}>
        <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', }} >
          <Image source={source} style={styles.img} />
          <CustomText caption style={{ textAlign: 'center', marginTop: 3 }}>
            {tittle}
          </CustomText>
        </View>
      </TouchableOpacity>
    )
  }

  //-- render time and weather
  renderWeather() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.5, }}>
          <CustomText h3 style={{ textAlign: 'center' }}>
            Karawang
      </CustomText>
          <CustomText gray2 body style={{ marginTop: 3, textAlign: 'center' }}>
            Indonesia
      </CustomText>
          <View style={{
            marginTop: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
            alignContent: 'center',
          }}>
            <CustomText h1 style={{ textAlign: 'center' }}>
              37
      </CustomText>
            <Image source={temp} style={styles.tempIcon} />
          </View>
        </View>
        <View style={{ alignItems: 'center', flex: 0.5 }}>
          <Image source={time} style={styles.timeIcon} />
          <CustomText h3 style={{ textAlign: 'center', marginTop: 10 }}>
            08.00 AM
          </CustomText>
        </View>
      </View>
    );
  }

  render() {
    const { agendaList } = this.state;
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        {this.renderHeader()}
        <Content>
          <View style={styles.mainContainer}>
            {this.renderWeather()}
            <View style={{ marginTop: 30 }}>
              <CustomText bold style={styles.tittleStyle}>
                What are you going to do?
              </CustomText>
              <View style={{ flex: 1, marginTop: 20, flexDirection: 'row', }}>
                {this.renderMiddleIcon(icBike, "Bike")}
                {this.renderMiddleIcon(bikestore, "Bike Store")}
                {this.renderMiddleIcon(peppole, "Community")}
                {this.renderMiddleIcon(calendar, "Events")}
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <CustomText bold style={styles.tittleStyle}>
                Agenda
              </CustomText>
              <FlatList
                style={{ marginTop: 15, backgroundColor: '#C9CDEB', borderRadius: 18, paddingHorizontal: 10, paddingVertical: 20 }}
                data={agendaList}
                keyExtractor={agendaList => agendaList.id}
                renderItem={({ item, index }) =>
                  <ItemView item={item}
                    style={{ backgroundColor: index % 2 == 1 ? '#687DFB' : '#FF7554' }}
                  />} />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
// <ItemView />