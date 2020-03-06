import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
import { color, sizes } from "../Theme";

class Button extends Component {
  render() {
    const {
      style,
      opacity,
      gradient,
      color,
      startColor,
      endColor,
      end,
      start,
      locations,
      shadow,
      children,
      ...props
    } = this.props;

    const buttonStyles = [
      styles.button,
      shadow && styles.shadow,
      color && styles[color], // predefined styles color for backgroundColor
      color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
      style
    ];

    // if (gradient) {
    //   return (
    //     <TouchableOpacity
    //       style={buttonStyles}
    //       activeOpacity={opacity}
    //       {...props}
    //     >
    //       <LinearGradient
    //         start={start}
    //         end={end}
    //         locations={locations}
    //         style={buttonStyles}
    //         color={[startColor, endColor]}
    //       >
    //         {children}
    //       </LinearGradient>
    //     </TouchableOpacity>
    //   );
    // }

    return (
      <TouchableOpacity
        style={buttonStyles}
        activeOpacity={opacity || 0.8}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  startColor: color.primary,
  endColor: color.secondary,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0.1, 0.9],
  opacity: 0.8,
  color: color.white
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: sizes.radius,
    height: sizes.base * 3,
    justifyContent: "center",
    marginVertical: sizes.padding / 3
  },
  shadow: {
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  accent: { backgroundColor: color.accent },
  primary: { backgroundColor: color.primary },
  secondary: { backgroundColor: color.secondary },
  tertiary: { backgroundColor: color.tertiary },
  black: { backgroundColor: color.black },
  white: { backgroundColor: color.white },
  gray: { backgroundColor: color.gray },
  gray2: { backgroundColor: color.gray2 },
  gray3: { backgroundColor: color.gray3 },
  gray4: { backgroundColor: color.gray4 }
});
