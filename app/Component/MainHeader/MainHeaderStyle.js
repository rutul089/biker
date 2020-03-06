import { StyleSheet } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { color, sizes } from 'app/Theme';

const styles = StyleSheet.create({
  headerStyle: {
    flexShrink: 0,
    backgroundColor: '#f8f8f8',
  },
  headerBkp: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  headerBody: {
    alignItems: 'center',
    flex: 3,
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flex: 1,
    flexDirection: 'row',
  },
  headerLeftSide: {
    width: 35,
    height: 35,
    tintColor: 'white',
    resizeMode: 'contain',
  },
  headerRightSide: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  headerBodyImage: {
    width: 100,
    height: 35,
    resizeMode: 'contain',
  },
  headerBodyContent: {
    fontSize: wp('4.5%'),
    color: 'white',
  },
  nextButtonText: {
    fontSize: 16,
    marginRight: 10,
    color: '#fff',
    fontWeight: '100',
  },
  leftButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftButtonWhite: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  prevButtonText: {
    fontSize: 18,
    color: color.black,
  },
  isTimestyle: {
    padding: 5,
    flexDirection: 'row',
    backgroundColor: color._EC6BAE,
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    marginRight: -10,
  },
});

export default styles;
