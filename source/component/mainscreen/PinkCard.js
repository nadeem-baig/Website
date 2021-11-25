import React from 'react'
import { View, Text,StyleSheet,ScrollView } from 'react-native'
import {image} from '../../assests/icons'
import color  from '../../assests/colour'
import Category from '../card/Category'


import CardwithSideicon from '../card/CardwithSideicon'
const PinkCard = () => {
    const images = Object.entries(image.pinkCard);
    const anotherimages1 = Object.entries(image.labtestin4hrr1);
    const anotherimages2 = Object.entries(image.labtestin4hrr2);
    const otherpopulartest1 = Object.entries(image.otherpopulartest1);
    const otherpopulartest2 = Object.entries(image.otherpopulartest2);

    return (
        <View style ={styles.container}>
            <Text style={styles.text}>{image.Headers[12]}</Text>
            <Text style={[styles.text,styles.subtext]}>{image.Headers[12.1]}</Text>
            <View style={styles.view}>
            {
                images.map((source,index) => 
                <Category key={index} name={source[0]} imageUri={source[1]} colorbackground={color.pink} resizeMode="cover" cardHeight={200} cardWidth={160}/>
                )
            }
            </View>
            <Text style={[styles.text]}>{image.Headers[13]}</Text>
            <Text style={[styles.text,styles.subtext]}>{image.Headers[12.1]}</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}  >
                <View>
                {
                           anotherimages1.map((source,index) => 
                           
                           <CardwithSideicon key={index} imageuri={source[1]} />

                             )
                }
</View>
<View>
                {
                            anotherimages2.map((source,index) => 
                        
                            <CardwithSideicon key={index} imageuri={source[1]} />

                            )
                }
     </View>
       
            </ScrollView>

            <Text style={styles.text}>{image.Headers[14]}</Text>
            <Text style={[styles.text,styles.subtext]}>{image.Headers[12.1]}</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}  >
                <View>
                {
                           otherpopulartest1.map((source,index) => 
                           
                           <CardwithSideicon key={index} imageuri={source[1]} />

                             )
                }
</View>
<View>
                {
                            otherpopulartest2.map((source,index) => 
                        
                            <CardwithSideicon key={index} imageuri={source[1]} />

                            )
                }
     </View>
       
            </ScrollView>


        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        // backgroundColor:"red",  
        // height:450
        marginTop:20
    },
    text:{
        fontWeight:"bold",
        fontWeight:"700",
        marginLeft:10,
        fontSize:20,
        marginTop:20
    },
    subtext:{
        fontSize:15,
        color:color.bluegradiant,
        marginTop:5,
        marginBottom:15
    },
    view:{
        flex:1,
        flexDirection: 'row',
        flexWrap:"wrap",   
        justifyContent:"space-around" ,
    }
})
export default PinkCard