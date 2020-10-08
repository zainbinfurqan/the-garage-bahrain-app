import { CONSTANTS } from '../../configuration/constants'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    categoryHeading: {
        height: 40, borderWidth: 0.5,
        borderRadius: 5,
        borderColor: CONSTANTS.DARK_RED_COLOR,
        margin: 5,
        justifyContent: 'center'
    },
    categoryText: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: CONSTANTS.MEDIUM_FONT_SIZE

    },
    singleCategory: {
        borderColor: CONSTANTS.DARK_RED_COLOR,
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 5, margin: 5,
    },
    singleCategoryText: {
        fontSize: CONSTANTS.SMALL_FONT_SIZE * 1.3,
        fontWeight: 'bold'
    },
    headingMain: { flexDirection: 'row', },
    headingLeft: { flex: .8, padding: 5 },
    headingLeftText: { fontWeight: 'bold' },
    switchMenu: {
        flex: .2,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    gridIcon: { height: 20, width: 20, alignSelf: 'center' },
    listView: { height: 20, width: 20, alignSelf: 'center' },
});

export default styles