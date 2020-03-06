import {StyleSheet} from 'react-native';
import {color} from '../../../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  selectedIcon: {height: wp('6'), width: wp('6'), resizeMode: 'contain'},
  // selectedIcon: {height: 30, width: 30, resizeMode: 'contain'},
  selectedIcon2: {height: 40, width: 40, resizeMode: 'contain'},
  unSelectedIcon2: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    tintColor: 'gray',
  },
});
export default styles;
