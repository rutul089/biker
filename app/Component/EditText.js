import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Text from './CustomText';
import Block from './Block';
import Button from './Button';
import { color, sizes, fonts } from 'app/Theme';

export default class EditText extends Component {
  state = {
    toggleSecure: false,
  };

  renderLabel() {
    const { label, error } = this.props;

    return (
      <Block flex={false}>
        {label ? (
          <Text h2 gray2={!error} accent={error}>
            {label}
          </Text>
        ) : null}
      </Block>
    );
  }

  renderToggle() {
    const { secure, rightLabel } = this.props;
    const { toggleSecure } = this.state;

    if (!secure) return null;

    return (
      <Button

        style={styles.toggle}
        onPress={() => this.setState({ toggleSecure: !toggleSecure })}>
        {rightLabel ? (
          rightLabel
        ) : (
            <Icon
              color={color.gray}
              size={sizes.font * 1.35}
              name={!toggleSecure ? 'md-eye' : 'md-eye-off'}
            />
          )}
      </Button>
    );
  }

  renderRight() {
    const { rightLabel, rightStyle, onRightPress } = this.props;

    if (!rightLabel) return null;

    return (
      <Button
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}>
        {rightLabel}
      </Button>
    );
  }

  render() {
    const { email, phone, number, secure, error, style, ...props } = this.props;

    const { toggleSecure } = this.state;
    const isSecure = toggleSecure ? false : secure;

    const inputStyles = [
      styles.input,
      error && { borderColor: color.accent },
      style,
    ];

    const inputType = email
      ? 'email-address'
      : number
        ? 'numeric'
        : phone
          ? 'phone-pad'
          : 'default';

    return (
      <Block flex={false} margin={[sizes.base, 0]}>
        {this.renderLabel()}
        <TextInput
          style={inputStyles}
          secureTextEntry={isSecure}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={inputType}
          {...props}
        />
        {this.renderToggle()}
        {this.renderRight()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: color.black,
    borderRadius: sizes.radius,
    fontSize: sizes.title,
    fontWeight: '500',
    color: color.black,
    height: sizes.base * 3,
  },
  toggle: {
    position: 'absolute',
    alignItems: 'flex-end',
    width: 24,
    backgroundColor: 'transparent',
    height: 24,
    bottom: 12,
    right: 5,
  },
});
