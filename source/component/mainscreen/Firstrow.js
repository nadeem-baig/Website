import React from 'react'
import { View,StyleSheet,Dimensions,Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Firstrow = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.innerText}> and red</Text>
        <View style ={styles.container}>
            <MaterialCommunityIcons name="heart-pulse" size={50} style={styles.icon} color="black" />
            <MaterialCommunityIcons name="heart-pulse" size={50} style={styles.icon} color="black" />
            <MaterialCommunityIcons name="heart-pulse" size={50} style={styles.icon} color="black" />
            <MaterialCommunityIcons name="heart-pulse" size={50} style={styles.icon} color="black" />
            <MaterialCommunityIcons name="heart-pulse" size={50} style={styles.icon} color="black" />
            <MaterialCommunityIcons name="heart-pulse" size={50} style={styles.icon} color="black" />
            <MaterialCommunityIcons name="heart-pulse" size={50} style={styles.icon} color="black" />
            <MaterialCommunityIcons name="heart-pulse" size={50} style={styles.icon} color="black" />
            <MaterialCommunityIcons name="heart-pulse" size={50} style={styles.icon} color="black" />
            <MaterialCommunityIcons name="heart-pulse" size={50} style={styles.icon} color="black" />
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'orange',
        height:125,
        width:Dimensions.get('window').width,
        flexDirection:"row",
        flexWrap:"wrap",      
        justifyContent:"space-around"  
    },
    icon:{
        width:60,
        height:50,
        margin:5,
        backgroundColor:'red',
    },
    innerText:{
        fontWeight: 'bold',
        textAlign: 'right',
        paddingRight:20,
    },
    main:{
        backgroundColor:'blue',
    }
})
export default Firstrow