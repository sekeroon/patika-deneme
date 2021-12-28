import React from "react";
import { View,image,Text,Image } from "react-native";
import styles from './NewsCardStyle'

const NewsCard=({news}) =>{


    return(
        <View style={styles.container}>
        <Image style={styles.image} source={{uri:news.imgURL}}></Image>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.price}>{news.price}</Text>
        <Text style={styles.stock}>{news.inStock}</Text>
        
        </View>



    );
};
export default NewsCard;