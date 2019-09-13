import { StyleSheet } from 'react-native'
import theme from './theme.style'
import themeStyle from './theme.style'

export default StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    col: {
        flex: 1
    },
    card: {
        backgroundColor: themeStyle.INPUT_LABEL_COLOR,
        margin: 10,
        padding: 20,
        borderRadius: 8
    }
})