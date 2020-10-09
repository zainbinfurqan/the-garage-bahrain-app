import { CONSTANTS } from '../../configuration/constants'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    categoriesMain: {
        width: '47%', height: 150,
        margin: 5,
    },
    categoryImage: {
        width: '100%',
        height: '100%',
        // position: 'absolute',
    },
    categoryText: {
        position: 'absolute',
        zIndex: 1, backgroundColor: CONSTANTS.DARK_RED_COLOR,
        alignSelf: 'flex-start', padding: 5, margin: 5,
        color: CONSTANTS.WHITE_COLOR,
        borderRadius: 5,
    },
    addPost: {
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: CONSTANTS.DARK_YELLOW_COLOR,
        borderRadius: 5,
        bottom: 3, height: 40, width: 120,
        flexDirection: 'row'
    },
    postAddIconMain: { flex: 0.4, justifyContent: 'center', },
    postAddIcon: { height: 35, width: 35, alignSelf: 'center' },
    postAddTestMain: { flex: 0.6, justifyContent: 'center' },
    postAddText: { fontSize: CONSTANTS.SMALL_LEVEL1_FONT_SIZE * 1.2, fontWeight: 'bold', alignSelf: 'center' }
});

export default styles