import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    title: {
      fontSize: 32,
    },
    listTitle: {
        color: '#246EB9',
        margin: 5, 
        padding: 5
    },
    textInput: {
        height: 40, 
        borderColor: '#ccc', 
        borderWidth: 1, 
        paddingHorizontal: 20, 
        borderRadius: 20
    },
    footer: {
        textAlign: 'center',
        padding: 5,
    },
    footerText: {
        textAlign: 'center',
        fontWeight: '600',
    },
    activityIndicator: {
        flex: 1, 
        flexDirection: 'row', 
        paddingHorizontal: '50%'
    }
});