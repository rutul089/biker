import { StyleSheet } from 'react-native';
import { color } from 'app/Theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    dots: {
        width: wp('3'),
        height: wp('3'),
        borderRadius: wp('3'),
        backgroundColor: '#000'
    },
    activeDot: {
        width: 12.5,
        height: 12.5,
        borderRadius: 6.25,
        borderColor: "#007BFA",
    }, containerCustomStyle: {
        height: wp('68')
    }, imageStyle: { width: wp('100'), height: wp('68'), backgroundColor: '#000' }


});

export default styles;