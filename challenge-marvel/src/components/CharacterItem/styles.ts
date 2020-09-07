import { StyleSheet,Dimensions } from 'react-native'


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
        
        
        borderRadius: 8,
        marginBottom: 5,
        
        width: (Dimensions.get('window').width)/2 ,
        marginRight:5,
        height: (Dimensions.get('window').width)/2,
        alignItems: 'center',
        justifyContent: 'center',
         
        
    },
    profile: {
        
        alignItems: 'center',
       
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius:75,
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar2:{
        width: 120,
        height: 120,
        
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    teste1:{
        alignItems: 'center',
        justifyContent: 'center',
        margin:13.5
        
        
    },
    
  
    container2: {
        backgroundColor: '#ccc',
        flex:1,
        
        
        
    },
    header: {
        // fontFamily: commonStyles.fontFamily,
        // backgroundColor: commonStyles.colors.today,
        // color: commonStyles.colors.secondary,
        textAlign: 'center',
        borderColor:'black',
 
        borderWidth:3,
        fontWeight:'bold', 
        backgroundColor:'#ed1d24',
        color:'white',
        //ed1d24
        
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
        borderRadius:20,
        textAlign:'center',
        borderWidth: 1,
        borderColor: 'black',
        padding:2,
        fontWeight:'bold',
        backgroundColor:'white',
        
        
    },
    background: {
      
        backgroundColor: `rgba(0, 0, 0, 0.5)`
    },
    flex:{
        backgroundColor:'blue',
        
        
    },
    series:{
        height:250
    },
    eventos:{
        height:70
    }
    
    
    


})

export default styles