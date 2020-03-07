import { StyleSheet } from 'react-native';
import { color } from '../../../../Theme';
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
  }, searchView: {
    backgroundColor: "#5AC8FA",
    height: wp('19'),
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  searchIcon: {
    marginLeft: 12,
    width: wp('5'),
    height: wp('5'),
    marginRight: 10
  },
  close: {
    width: wp('3.3'),
    height: wp('3.3'),
    marginRight: 12
  }
});

export default styles;
