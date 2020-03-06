import {StyleSheet} from 'react-native';
import {color} from '../../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    marginTop: wp('15%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.white,
  },
});
export default styles;
