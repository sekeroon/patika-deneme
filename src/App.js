import React from "react";
import { View,Text,FlatList,SafeAreaView,Image, StyleSheet,TextInput } from "react-native";
import patika_data from './patika_data.json';
import NewsCard from "./component/NewsCard/NewsCard";

function App(){
  const RenderPatika=({item})=> <NewsCard news={item}/>;


  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>PATIKASTORE</Text>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
        
        
       
      />
      <View>
        <FlatList
        numColumns={2}
        data={patika_data}
        renderItem={RenderPatika} 
          


        />


      </View>

    </SafeAreaView>


);

};
const styles=StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"white",
  },
  head:{
    color:"#942994",
    fontSize:40,
    fontWeight:"bold",
    padding:10,
  },
  input:{
    borderRadius:12,
    backgroundColor:"#ECEFF1",
    height:40,
    padding:10,
  }
  
})

export default App



    
     
  



  
