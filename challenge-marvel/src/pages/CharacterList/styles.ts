import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCC',
        

    },
    filter:{
        marginLeft:25
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
        backgroundColor: '#04d361',
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