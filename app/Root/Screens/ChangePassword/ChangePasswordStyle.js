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
    }, thumbnail: {
        borderRadius: wp('35'),
        height: wp('35'),
        width: wp('35')
    }, input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: color.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default styles;
