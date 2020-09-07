import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop:25,
        flex: 1,
    },
    filter: {
        flex:1,
        marginLeft: 375
    },
    searchForm: {
        marginBottom: 24
    },
    label: {
        color: '#d4c2ff',

    },
    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },
    submitButton: {
        backgroundColor: '#ed1d24',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    submitButtonText: {
        color: '#FFF',

        fontSize: 16,
    },


})

export default styles