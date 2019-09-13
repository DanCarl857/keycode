import { StyleSheet } from 'react-native';
import themeStyle from '../../styles/theme.style';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        marginBottom: 40
    },
    text: {
        fontSize: themeStyle.FONT_SIZE_NORMAL,
        fontWeight: themeStyle.FONT_WEIGHT_MEDIUM
    }
})