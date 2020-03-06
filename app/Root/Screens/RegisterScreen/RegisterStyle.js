import { StyleSheet } from 'react-native';
import { color } from '../../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  imageStyle: { height: 70, width: 250, resizeMode: 'contain' },
  container1: {
    flex: 1,
    backgroundColor: color._5AC8FA,
  }, input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: color.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: color.accent,
    borderBottomWidth: 1,
  },
});
export default styles;
