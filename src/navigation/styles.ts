import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: responsiveHeight(8),
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(3),
        paddingTop: responsiveHeight(3),
        backgroundColor: 'white',
    },
    headerLeft: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 10
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 15
    },
    headerText: {
        fontSize: responsiveFontSize(2),
        color: 'black',
        fontWeight: 'bold'
    },
    avatar: {
        height: responsiveWidth(11),
        width: responsiveWidth(11),
        borderRadius: 100,
    },
    detailHeader: {
        position: 'absolute',
        top: responsiveHeight(1.5),
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: responsiveHeight(8),
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(4),
        backgroundColor: 'rgb(255, 255, 255, 0)',
    },
    detailHeaderBtn: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 100,
        padding: responsiveWidth(1.5),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})