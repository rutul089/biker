import { StyleSheet } from 'react-native';
import { color } from '../../../Theme';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    imageStyle: { height: wp('35'), width: wp('35'), resizeMode: 'contain' },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color._5AC8FA,
    },
});
export default styles;
