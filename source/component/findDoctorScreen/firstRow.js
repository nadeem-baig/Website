import React from 'react'
import { ScrollView,StyleSheet,Text } from 'react-native'
import { image } from '../../assests/icons'
import ReusableCard from '../card/ReusableCard'
import colour from '../../assests/colour'
const firstRow = () => {

    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false}>
             <Text style={[styles.card,{fontSize:18,fontWeight:'100'}]}>{image.Headers[15.1]}</Text>
         < ReusableCard type={image.Surgeries}  text ={image.Headers[15]} height={250} space={250}resizeMode="contain"/>
          
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
        marginLeft:20,
        fontSize:24, 
        fontWeight:"700" 
    },
    text:{
        backgroundColor:colour.backgroundColor,
        height:30,
        width: "70%",
        marginBottom:100,
        alignItems: "center",
        marginLeft:"15%",
        borderRadius:20,
        padding:5
    }
})
export default firstRow