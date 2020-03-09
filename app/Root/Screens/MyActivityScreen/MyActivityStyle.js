import {StyleSheet} from 'react-native';
import {color} from 'app/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {backgroundColor: '#FF7554', padding: 10, borderRadius: 12},
  bikeImg: {
    tintColor: '#fff',
    height: wp('6.3'),
    width: wp('6.3'),
  },
  tittle: {fontSize: wp('4.5'), color: '#fff', flex: 0.9},
  captain: {
    color: '#fff',
    flex: 0.9,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  doneImg: {
    height: wp('5'),
    width: wp('5'),
    justifyContent: 'center',
    alignSelf: 'flex-end',
    resizeMode: 'contain',
    flex: 0.1,
  },
  pinImg: {
    height: wp('5'),
    width: wp('4'),
    flex: 0.1,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
