import { StyleSheet } from 'react-native';
import { color } from '../../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  imageStyle: { height: wp('30'), width: wp('50'), resizeMode: 'contain' },

  login: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: color.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: color.accent,
    borderBottomWidth: 1,
  },
  container1: {
    flex: 1,
    marginTop: wp('15%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
