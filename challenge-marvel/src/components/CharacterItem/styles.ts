import { StyleSheet, Dimensions } from 'react-native'


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
        borderRadius: 8,
        marginBottom: 5,
        width: (Dimensions.get('window').width) / 2,
        marginRight: 5,
        height: (Dimensions.get('window').width) / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile: {
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 75,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar2: {
        width: 120,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerModal: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 13.5,
        marginBottom: 12,
        marginRight: 13.5,
        marginLeft: 13.5
    },
    container2: {
        flex: 1,
    },
    header: {
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 3,
        fontWeight: 'bold',
        backgroundColor: '#ed1d24',
        color: 'white',
        padding: 7,
        fontSize: 18
    },
    submitButtonText: {
        color: '#FFF',
        fontSize: 16,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        borderRadius: 25,
        backgroundColor: '#555',
        shadowColor: 'grey'
    },
    favoriteButton: {
        backgroundColor: '#8257e5',
        width: 28,
        height: 28,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    favorited: {
        backgroundColor: '#e33d3d'
    },
    name: {
        borderRadius: 20,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'black',
        padding: 2,
        fontWeight: 'bold',
        backgroundColor: 'white',
    },
    background: {
        backgroundColor: `rgba(0, 0, 0, 0.5)`
    },
    flex: {
        backgroundColor: 'blue',
    },
    series: {
        height: 250
    },
    eventos: {
        height: 70
    },
    backgroundImage: {
        height: (Dimensions.get('window').height) / 3.5,
        width: (Dimensions.get('window').width) / 2
    },
    imageBackgroundModal: {
        height: (Dimensions.get('window').height),
        width: (Dimensions.get('window').width)
    },
    flexRow: {
        flexDirection: 'row'
    },
    description: {
        textAlign: 'left',
        flex: 2, marginLeft: 11,
        fontWeight: 'bold',
        fontSize: 16
    },
    listView: {
        margin: 7.5
    },
})

export default styles