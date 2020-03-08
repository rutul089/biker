import { StyleSheet } from 'react-native';
import { color } from '../../../../Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#5AC8FA',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: wp('13'),
    borderBottomLeftRadius: wp('13'),
    padding: wp('5'),
    flexDirection: 'row'
  },
  avtarStyle: {
    borderWidth: 3,
    borderColor: "#fff", height: wp('18'),
    width: wp('18'),
    borderRadius: wp('18')
  },
  mainContainer: { padding: wp('5'), },
  tempIcon: { height: wp('8'), width: wp('6'), resizeMode: 'contain', marginLeft: 10 },
  timeIcon: { height: wp('10'), width: wp('10'), resizeMode: 'contain' },
  tittleStyle: {
    fontSize: wp('4.5'),
  }, img: { height: wp('12'), width: wp('13'), resizeMode: 'contain', },
  contanorStyle: {
    backgroundColor: "#f2f2f2", borderRadius: 12, flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center', alignContent: 'center', paddingVertical: 9,
    flex: 0.25, margin: 3,
  }
});
export default styles;
