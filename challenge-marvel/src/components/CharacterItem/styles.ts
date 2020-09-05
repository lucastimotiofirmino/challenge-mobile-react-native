import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        
        borderWidth: 1,
        borderColor: '#e6e6',
        borderRadius: 8,
        marginBottom: 16,
        
        width: 197,
        margin:4,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
         
        elevation: 10,
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius:75,
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    teste1:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    
  
    container2: {
        backgroundColor: '#ccc',
        flex:1
        
        
    },
    header: {
        // fontFamily: commonStyles.fontFamily,
        // backgroundColor: commonStyles.colors.today,
        // color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
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
        borderRadius:25,
        backgroundColor:'#555',
        shadowColor:'grey'
        // color: commonStyles.colors.today
    },
    favoriteButton: {
        backgroundColor: '#8257e5',
        width: 28,
        height: 28,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        margin:2
       
    },
    favorited: {
        backgroundColor: '#e33d3d'
    },
    name:{
        textAlign:'center'
    },
    background: {
      
        backgroundColor: `rgba(0, 0, 0, 0.5)`
    },
    
    
    


})

export default styles