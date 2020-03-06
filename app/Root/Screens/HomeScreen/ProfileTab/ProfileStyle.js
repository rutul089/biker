import { StyleSheet } from 'react-native';
import { color, sizes } from '../../../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#626262',
    flex: 1,
  },
  innerMain: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderColor: '#d0d0d0',
  },
  header: {
    paddingBottom: 25,
    padding: 20
  },
  avatar: {
    height: sizes.base * 2.2,
    width: sizes.base * 2.2
  },
  iconStyle: { height: wp('5'), width: wp('5'), tintColor: 'black' }
});

export default styles;
