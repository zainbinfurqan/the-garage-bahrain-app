import { CONSTANTS } from '../../configuration/constants'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: CONSTANTS.DARK_RED_COLOR,
        flexDirection: 'row'
    },
    left: {
        flex: 0.2,
        justifyContent: 'center'
    },
    middle: {
        flex: 0.6,
        justifyContent: 'center'
    },
    right: {
        flex: 0.2
    },
    leftIcon: {
        height: CONSTANTS.ICONS_SIZE_SMALL, width: CONSTANTS.ICONS_SIZE_SMALL,
        alignSelf: 'center'
    },
    headerText: {
        fontSize: CONSTANTS.MEDIUM_FONT_SIZE,
        color: CONSTANTS.WHITE_COLOR,
        alignSelf: 'center'
    }

});

export default styles