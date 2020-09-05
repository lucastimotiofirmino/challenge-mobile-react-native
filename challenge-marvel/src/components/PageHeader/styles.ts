import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#8257e5',
        flexDirection: 'row',
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {

        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        marginVertical: 10,
        marginLeft: 25

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

})

export default styles