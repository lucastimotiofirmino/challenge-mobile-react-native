import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'pink',
        shadowOpacity: 0, 
        elevation: 10
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24
    },
    avatar: {
        width: 100,
        height: 100,

    },
    name: {
        
        color: '#32264d',
        fontSize: 20
    },
    
    


})

export default styles