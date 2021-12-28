import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({

    container:{
       flex:1,
        padding:10,
        borderRadius:5,
        borderWidth:5,
        borderColor:"#ECEFF1",
        backgroundColor:"white",

        
       
        
    },
        
       
    title:{
        color:"#000000",
        fontSize:20,
        
        fontWeight:"bold",

    },

    image:{
        height: Dimensions.get('window').height /2,
       
       borderRadius:10,
       
       
       
   },
   
   price:{
       color:"grey",
       fontSize:15,

   },
   stock:{
       color:"red",
       fontSize:20,
       fontWeight:"bold",
   }

  
})



   
       
       
       
    
        
        
        
       




