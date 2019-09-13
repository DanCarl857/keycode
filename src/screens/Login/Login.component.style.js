import { StyleSheet } from 'react-native'
import themeStyle from '../../styles/theme.style'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 55,
        paddingVertical: 10,
        backgroundColor: themeStyle.PRIMARY_COLOR
    },
    headerText: {
        fontWeight: themeStyle.FONT_WEIGHT_LIGHT,
        marginBottom: 20
    },
    marginRight5: {
        marginRight: 5
    },
    marginLeft5: {
        marginLeft: 5
    },
    marginTop28: {
        marginTop: 28
    },
    input: {
        marginTop: 12
    },
    label: {
        color: themeStyle.INPUT_LABEL_COLOR,
        textTransform: 'uppercase',
        fontSize: 10,
        fontWeight: '700'
    },
    btn: {
        alignSelf: 'stretch',
        marginTop: 20,
        marginHorizontal: 3
    }
})