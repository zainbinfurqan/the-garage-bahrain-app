import { CONSTANTS } from '../../../configuration/constants'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    selectCategoryMain: {
        height: 50,
        borderWidth: 1, margin: 5, padding: 5,
        borderRadius: 5,
        justifyContent: 'center'
    },
    selectCateogryText: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: CONSTANTS.MEDIUM_FONT_SIZE
    },
    inputArea: {
        margin: 5,
        borderRadius: 5,
        borderWidth: 1
    },
    inputText: {
        margin: 5,
        borderRadius: 5,
    },
    priceMain: { flexDirection: 'row', borderWidth: 1, margin: 5, },
    inputTextPrice: { flex: 0.9 },
    priceIcon: { flex: .1, borderWidth: 1, justifyContent: 'center' },
    iconText: { alignSelf: 'center', fontSize: CONSTANTS.MEDIUM_FONT_SIZE },
    selectedImageSlider: {
        height: 130,
        justifyContent: 'center'
    },
    adImageMain: {
        width: 100, height: '85%',
        marginLeft: 5,
        borderRadius: 5,
        marginRight: 5,
        backgroundColor: CONSTANTS.DARK_YELLOW_COLOR, justifyContent: 'center'
    },
    uplaodImageIcon: {
        height: 50, width: 50, alignSelf: 'center'
    },
    uploadImageText: {
        alignSelf: 'center',
        fontSize: CONSTANTS.SMALL_FONT_SIZE * 1.4
    },
    Button: {
        backgroundColor: CONSTANTS.DARK_RED_COLOR, padding: 10,
        alignSelf: 'center',
        borderRadius: 5,
        width: '90%',
    }
});

export default styles