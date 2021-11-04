import React,{useState} from 'react'
import { View,StyleSheet, Dimensions, ScrollView,Text } from 'react-native'
import Category from '../card/Category'
const Width =Dimensions.get('window').width;
const Height =Dimensions.get('window').height;

const Card = ({text,type,cardWidth,cardHeight,font,weight}) => {
    const images = Object.entries(type);
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
        <View >
  {  text &&  <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                {text}
                            </Text>
          }
            <View style={styles.container}>
                <ScrollView 
                onScroll={({nativeEvent}) => onchange(nativeEvent)} 
                showsHorizontalScrollIndicator={false} 
                pagingEnabled horizontal 
                >

                {
             images.map((source,index) => 
             <View key ={index} style={styles.warp}>
              <Category key={index} name={source[0]} imageUri={source[1]} cardHeight={cardHeight} cardWidth={cardWidth} font={font} weight={weight}/>

             </View>
            )}
                           
                </ScrollView>
                <View style={styles.warpDot}>
                {
             images.map((source,index) => 
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
        width:'100%',
        flexDirection:"row",
        flexWrap:"wrap",      
        justifyContent:"space-around" ,
        marginLeft:20
    },
    warp:{
        width:Width,
        height:Height*0.6,
    },
    warpDot:{
        position: 'absolute',
        bottom:0,
        flexDirection:'row',
        alignSelf:'center',
        marginLeft:Width*0.3

    },
    dotactive:{
        margin:3,
        color:'gray',
    },
    dot:{
        margin:3,
        color:'white'
    }
})
export default Card