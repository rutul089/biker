import { StyleSheet } from 'react-native';
import { color } from 'app/Theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    imgStyle: {
        height: wp('21'),
        width: wp('21'),
        padding: 0,
        margin: 0,
        borderRadius: 12,
        backgroundColor: '#fff'
    },
    direction: {
        height: wp('6.5'),
        width: wp('6.5'),
    }, directionText: {
        color: '#687DFB',
        fontSize: wp('4')
    }, container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, bottoTextStyle: {
        fontSize: wp('4.2')
    }, note: {
        marginTop: 3,
        color: '#707070',
        fontSize: wp('4')
    }, timeContainer: {
        borderTopWidth: 0.5,
        borderTopColor: '#8E8E93',
        marginTop: 10,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }


});

export default styles;