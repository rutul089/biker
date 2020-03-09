import {StyleSheet} from 'react-native';
import {color} from 'app/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF7554',
    padding: 10,
    borderRadius: 12,
  },
  bikeImgStyle: {
    height: wp('4'),
    width: wp('4'),
    tintColor: '#000',
    resizeMode: 'contain',
  },
  tittleStyle: {
    fontSize: wp('4.2'),
  },
  mapStyle: {
    height: wp('55'),
    flex: 1,
    width: null,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
  },
});

export default styles;
