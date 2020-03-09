import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const color = {
  _FF7554: '#FF7554',
  _687DFB: '#687DFB',
  _8E9DFD: '#8E9DFD',
  _5AC8FA: '#5AC8FA',
  _1D7AA3: '#1D7AA3',
  _FFCF54: '#FFCF54',
  _FFAE54: '#FFAE54',
  _f3f3f3: '#f3f3f3',
  _DDDDDD: '#DDDDDD',
  _000000: '#000000',
  _999999: '#999999',
  _0F9DEC: '#0F9DEC',
  _707070: '#707070',
  _018CCA: '#018CCA',
  accent: '#F3534A',
  primary: '#687DFB',
  secondary: '#2BDA8E',
  tertiary: '#FFE358',
  divider: '#D1D1D6',
  black: '#323643',
  white: '#FFFFFF',
  gray: '#9DA3B4',
  gray2: '#707070',
};

const sizes = {
  // global sizes
  base: wp('3.4'),
  font: wp('3.3'),
  radius: 6,
  padding: 25,

  // font sizes
  h1: wp('5.7'), // 26
  h2: wp('4.2'), // 20
  h3: wp('4'), //18
  title: wp('3.7'), //18
  header: wp('3.5'), //16
  body: wp('3.3'), // 14
  caption: wp('2.9'), //12
};

// const sizes = {
//   // global sizes
//   base: 14,
//   font: 13,
//   radius: 6,
//   padding: 25,

//   // font sizes
//   h1: 24, // 26
//   h2: 20, // 20
//   h3: 18, //18
//   title: 18, //18
//   header: 16, //16
//   body: 14, // 14
//   caption: 12, //12
// };

const fonts = {
  h1: {
    fontSize: sizes.h1,
  },
  h2: {
    fontSize: sizes.h2,
  },
  h3: {
    fontSize: sizes.h3,
  },
  header: {
    fontSize: sizes.header,
  },
  title: {
    fontSize: sizes.title,
  },
  body: {
    fontSize: sizes.body,
  },
  caption: {
    fontSize: sizes.caption,
  },
};

export {color, sizes, fonts};
