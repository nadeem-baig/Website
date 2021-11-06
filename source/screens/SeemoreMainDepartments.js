import React from 'react'
import { View,Image, Text,StyleSheet, ScrollView} from 'react-native'
import {image} from '../assests/icons'
const SeemoreMainDepartments = () => {
    const images = Object.entries(image.SeemoreMainDepartments);
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
        <View style ={styles.container}>
            {
             images.map((source,index) => 
             <View style ={styles.card}   key={index}>
             <Image  source={source[1]} style ={styles.images}  />
             <Text>{source[0]}</Text>
            </View>
            )}
        </View>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        flexWrap:"wrap",   
        justifyContent:"space-around" ,
    },
    card:{
        height:100,
        width:90,
        margin:10, 
        // backgroundColor:"orange",
        alignItems:"center",
        padding:10,
    },
    images:{
        height:50,
        width:50
    },
})
export default SeemoreMainDepartments