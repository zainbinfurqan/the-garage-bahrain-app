import { CONSTANTS } from '../../../../configuration/constants'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    categoryHeadingMain: {
        borderWidth: 1, padding: 5,
        justifyContent: 'center',
        borderRadius: 5, margin: 5,
        borderColor: CONSTANTS.DARK_RED_COLOR
    },
    categoryHeadingText: {
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    brandMain: {
        borderBottomWidth: 0.5,
        borderBottomColor: CONSTANTS.BORDER_COLOR_LIGHT_GREY,
        marginLeft: 2, marginRight: 2,
        padding: 5,
        flexDirection: 'row'
    },
    left: {
        flex: 0.1,
        padding: 5,
    },
    right: {
        flex: 0.9,
        justifyContent: 'center',
        padding: 5,
    },
    leftIcon: {
        height: 25,
        width: 25
    }
});

export default styles