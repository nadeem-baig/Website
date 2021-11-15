import React from 'react'
import { ScrollView,View,StyleSheet,Text,TouchableOpacity } from 'react-native'
import { image } from '../../assests/icons'
import ReusableCard from '../card/ReusableCard'
import Category from '../card/Category'
import colour from '../../assests/colour'
const firstRow = ({navigation}) => {
    const images = Object.entries(image.SeemoreMainDepartments);

    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false}>
         < ReusableCard type={image.SeemoreMainDepartments}  text ={image.Headers[3]} height={200} resizeMode="contain"/>
             <Text style={styles.card}>{image.Headers[4]}</Text>
         <View style ={styles.container}>
         {
             images.map((source,index) => 
             <Category key={index} name={source[0]} imageUri={source[1]}  resizeMode="contain"  cardWidth={90} cardHeight={100} />
            )}
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("SeemoreMainDepartments")}>
            <View style={styles.text}><Text>More Details ....</Text></View>
            </TouchableOpacity >
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
        margin:10,
        fontSize:24, 
        fontWeight:"700" 
    },
    text:{
        backgroundColor:colour.backgroundColor,
        height:20,
        width: "70%",
        marginBottom:100,
        alignItems: "center",
        marginLeft:"15%"
    }
})
export default firstRow