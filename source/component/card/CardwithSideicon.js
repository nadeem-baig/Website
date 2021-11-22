import React from 'react'
import { View, Text,Image } from 'react-native'
import colour from '../../assests/colour'

const CardwithSideicon = ( {imageuri,index}) => {

    return (
        <View style={{flex:0.5,flexDirection:"row",width:300,marginRight:20,marginLeft:10}} key={index}>

        <Image source={imageuri.image[0]} style={{height:80,width:70}} />

        <View style={{backgroundColor:"white",width:"100%",height:80,paddingLeft:20}}>
            <Text style={{fontWeight:"bold",fontWeight:"700"}}>{imageuri.data.heading}</Text>
            <Text style={{fontWeight:"500"}}>{imageuri.data.subheading}</Text>
            <Text style={{fontWeight:"bold",fontWeight:"700",color:colour.bluegradiant}}>{imageuri.data.price}</Text>
        </View>
        </View> 
    )
}

export default CardwithSideicon