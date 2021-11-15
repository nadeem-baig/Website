import React from 'react'
import { View,Image, Text,StyleSheet,Dimensions} from 'react-native'
import colour from '../../assests/colour'
const SeemoreCard = ({image,text,limit=Object.entries(image).length,Seemore=false}) => {
    const images = Object.entries(image)
    // console.log(Seemore);
    return (
        <>
            <Text style={styles.text}>{text}</Text>
        <View style ={styles.container}>
            {
             images.slice(0,limit).map((source,index) => 
             <View style ={styles.card}   key={index}>
             <Image  source={source[1]} style ={styles.images}  />
             <Text style={{fontWeight:"bold",fontWeight:"300"}}>{source[0]}</Text>
            </View>
            )}
                    {
        Seemore && <> 
        <View style={styles.circle}>
        <Text style={{color:colour.blue}}> See More </Text> 
        </View>
        </>
        }
        </View>

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
        height:90,
        width:85,
        // margin:10, 
        // backgroundColor:"orange",
        alignItems:"center",
        padding:5,
        // borderWidth: 1,
        // borderColor: "#20232a",   
    },
    images:{
        height:40,
        width:50,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.12,
        height: Dimensions.get('window').width * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:colour.backgroundColor
    },
    text:{
        marginLeft:20,
        fontSize:20,
        fontWeight:"bold",
    },
    circle:{
        marginTop:10,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.19,
        height: Dimensions.get('window').width * 0.19,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: "#20232a"
        ,backgroundColor:colour.bluegradiant
    }
})
export default SeemoreCard