import React,{useState} from 'react'
import { View, Image,StyleSheet, Dimensions, ScrollView,Text } from 'react-native'
const Width =Dimensions.get('window').width;
const Height =Dimensions.get('window').height;

const images =[
    require('../assests/images/1.jpg'),
    require('../assests/images/2.jpg'),
    require('../assests/images/3.jpg'),
    require('../assests/images/4.jpg'),
]
const Sliding = () => {
    const [imgActive,setimagActive] =useState(0)

    onchange=(nativeEvent)=>{
if(nativeEvent){
    const slide = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width)
    if(slide != imgActive){
setimagActive(slide)
    }
}
    }
    return (
        <View style ={styles.container}>
            <View style={styles.warp}>
                <ScrollView 
                onScroll={({nativeEvent}) => onchange(nativeEvent)} 
                showsHorizontalScrollIndicator={false} 
                pagingEnabled horizontal 
                style={styles.warp}
                >
                {
             images.map((source,index) => 
                <Image key ={index}style={styles.warp} {...{ source }} />
            )}
                           
                </ScrollView>
                <View style={styles.warpDot}>
                {
             images.map((source,index) => 
                // <Image key ={index}style={styles.image} {...{ source }} />
                <Text key={index} style={imgActive == index ? styles.dotactive : styles.dot}>
                    ●
                </Text>
            )}
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
    flex: 1,
    },
    warp:{
        width:Width,
        height:Height*0.25,
    },
    warpDot:{
        position: 'absolute',
        bottom:0,
        flexDirection:'row',
        alignSelf:'center'
    },
    dotactive:{
        margin:3,
        color:'black',
    },
    dot:{
        margin:3,
        color:'white'
    }
})
export default Sliding