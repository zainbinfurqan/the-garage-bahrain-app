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
        bottom: 0, height: 50, width: 100,
    }
});

export default styles