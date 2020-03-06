import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  ImageBackground,
  StatusBar,
} from 'react-native';
import styles from './MainHeaderStyle';
import { Body, Header, Left, Right, Text, Button } from 'native-base';
import { color, sizes } from 'app/Theme';
import { CustomText } from 'app/Component';
import Menu, { MenuDivider, MenuItem } from 'react-native-material-menu';
import {
  iconContextmenu,
  iconLeaveCancel,
  iconLeaveDelete,
  iconLeaveEdit,
  navBar,
} from 'app/assets';

export class MainHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };
  render() {
    const {
      theme,
      headerStyle,
      leftIcon,
      backAction,
      leftText,
      isSubmit,
      onSubmit,
      timein,
      isTimein,
      optionMenu,
      onChangePassItemPress,
      onMenuItemPress,
      rightIcon,
      rightText,
    } = this.props;
    return (
      <Header noShadow={false} style={[styles.headerStyle, headerStyle]}>
        <Left style={styles.headerLeft}>
          <View style={styles.leftButton}>
            {leftIcon && (
              <TouchableOpacity onPress={backAction}>
                <Image
                  source={this.props.leftIcon}
                  style={
                    leftIcon == 3
                      ? { height: 25, width: 25 }
                      : [
                        styles.headerLeftSide,
                        theme === 'white'
                          ? { tintColor: 'black' }
                          : { tintColor: 'white' },
                      ]
                  }
                />
              </TouchableOpacity>
            )}
            {this.props.leftText && (
              <TouchableOpacity onPress={backAction}>
                <Text style={styles.prevButtonText}>{leftText}</Text>
              </TouchableOpacity>
            )}
          </View>
        </Left>

        <Body style={styles.headerBody}>
          {this.props.bodyContent && (
            <CustomText
              light
              style={[
                styles.headerBodyContent,
                theme === 'white' ? { color: 'black' } : { color: 'black' },
              ]}
              numberOfLines={1}>
              {this.props.bodyContent.toUpperCase()}
            </CustomText>
          )}
        </Body>
        <Right style={styles.headerRight}>
          {isSubmit && (
            <CustomButton
              buttonStyles={{
                borderRadius: 15,
                backgroundColor: color._018CCA,
                padding: 5,
              }}
              textStyles={{ color: 'white', paddingRight: 5, paddingLeft: 5 }}
              onPress={() => {
                onSubmit && onSubmit();
              }}>
              {'Submit'}
            </CustomButton>
          )}
          {isTimein && (
            <View style={styles.isTimestyle}>
              <CustomText style={{ color: 'white', fontSize: 10 }}>
                {'Total in : '}
              </CustomText>
              <Text style={{ color: 'white', fontSize: 12 }}>{timein}</Text>
            </View>
          )}
          {this.props.rightText && (
            <TouchableOpacity onPress={this.props.nextAction}>
              <Text style={styles.nextButtonText}>{this.props.rightText}</Text>
            </TouchableOpacity>
          )}
          {this.props.rightIcon && (
            <TouchableOpacity onPress={this.props.nextAction}>
              <Image
                source={this.props.rightIcon}
                style={styles.headerRightSide}
              />
            </TouchableOpacity>
          )}
          {this.props.isDelete && (
            <TouchableOpacity onPress={this.props.deletePost}>
              <Image
                source={iconLeaveDelete}
                style={[
                  styles.headerRightSide,
                  { tintColor: 'white', marginLeft: 10 },
                ]}
              />
            </TouchableOpacity>
          )}
          {optionMenu && (
            <Menu
              ref={this.setMenuRef}
              button={
                <TouchableOpacity onPress={this.showMenu}>
                  <Image
                    style={{ height: 25, width: 25, tintColor: 'white' }}
                    source={iconContextmenu}
                  />
                </TouchableOpacity>
              }>
              {
                <MenuItem
                  onPress={() => {
                    onChangePassItemPress && onChangePassItemPress(1);
                    this.hideMenu();
                  }}>
                  <Text style={{ fontSize: 12 }}>{'Change Password'}</Text>
                </MenuItem>
                /* <MenuDivider/>
                    <MenuItem onPress={() => {
                        onMenuItemPress && onMenuItemPress(3)
                        this.hideMenu()
                    }}>

                        <Text style={{fontSize: 12}}>{'Change PIN'}</Text>
                    </MenuItem> */
              }
              {/* <MenuDivider/> */}
              <MenuItem
                onPress={() => {
                  onMenuItemPress && onMenuItemPress(1);
                  this.hideMenu();
                }}>
                <Text style={{ fontSize: 12 }}>{'Logout'}</Text>
              </MenuItem>
            </Menu>
          )}
        </Right>
      </Header>
    );
  }
}

export default MainHeader;
