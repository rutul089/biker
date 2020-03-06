import {StyleSheet} from 'react-native';
import {color} from '../../../../Theme';
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
});

export default styles;
