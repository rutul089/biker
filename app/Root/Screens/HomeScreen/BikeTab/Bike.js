import React, { Component } from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './BikeStyle';
import MainHeader from 'app/Component/MainHeader';
import { Container, Item, Input, Icon, Label, Content } from 'native-base';
import { filter, search, close } from 'app/assets';
import ItemView from './ItemView';
import { bikeList } from '../../../../mocks';
export default class Bike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
      searchWord: '',
      bikeList: bikeList
    };
  }

  //-- function for hadnling fillter click
  filterClick() {
    alert('Filter Click')
  }

  //-- Render search view
  renderSearch() {
    return (
      <View style={styles.searchView}>
        <Item inlineLabel style={{ backgroundColor: '#fff', borderRadius: 12, elevation: 2, }}>
          <Image
            source={search}
            style={styles.searchIcon}
          />
          <Input placeholder='Search here'
            value={this.state.searchWord}
            onChangeText={text => {
              this.setState({
                searchWord: text,
                close: text.length != 0
              })
            }}
            style={{ fontSize: 16, color: '#707070', paddingRight: 12 }} />
          {this.state.close && <TouchableOpacity onPress={() => this.setState({
            searchWord: '',
            close: false
          })}>
            <Image
              source={close}
              style={styles.close}
            />
          </TouchableOpacity>}
        </Item>
      </View>
    );
  }

  //-- Handle on click event for item view
  handleItemClick(item) {
    // alert(JSON.stringify(item))
    this.props.navigation.navigate('BikeDetailScreen')
  }

  //-- Open google map
  handleDirectionClick(item) {
    alert(JSON.stringify(item))
  }
  render() {
    const { bikeList } = this.state;
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <MainHeader
          bodyContent={'Bike'}
          rightIcon={filter}
          nextAction={() => this.filterClick()}
        />
        {this.renderSearch()}
        <FlatList
          data={bikeList}
          keyExtractor={bikeList => bikeList.id}
          renderItem={({ item }) =>
            <ItemView item={item}
              isTime
              navigation={this.props.navigation}
              onClick={() => {
                this.props.navigation.navigate('BikeDetailScreen', item)
              }}
              getDirection={this.handleDirectionClick}
            />} />


      </Container>
    );
  }
}
