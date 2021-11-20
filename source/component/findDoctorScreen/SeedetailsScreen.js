import React from 'react'
import { View, Text,StyleSheet,ScrollView } from 'react-native'
import colour from '../../assests/colour'
const SeedetailsScreen = ({route}) => {
    return (
        <ScrollView>

        <View style ={styles.container}>
            <Text style={styles.name}>{route.params.data.name}</Text>
            <Text style={styles.manufacturer}>Manufacturer :- {route.params.data.manufacturer}</Text>
            <Text style={styles.deta}>{route.params.data.deta}</Text>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    name:{
        fontSize:24,
        fontWeight:"bold",
        fontWeight:"700",
        color:colour.red,
        marginLeft:10,
    },
    manufacturer:{
        fontSize:20,
        fontWeight:"bold",
        fontWeight:"700",
        color:colour.tomato,
        marginLeft:10

    },
    deta:{
        fontSize:16,
        fontWeight:"900",
        fontWeight:"700",
        margin:10,
        color:colour.white,

    },
    container:{
        backgroundColor:colour.productBackground
    }
})
export default SeedetailsScreen