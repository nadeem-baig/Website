import React from 'react'
import { View, Text,Image } from 'react-native'
import color from '../../assests/colour'
const NavigationSideiconCard = ({type,images}) => {

    return (
        <View style={{flex:1,flexDirection:"row",width:'100%',height:50,marginLeft:10,margin:1,backgroundColor:color.white,}} >

        <Image source={images} style={{height:50,width:50,resizeMode:'contain'}} />

        <View style={{width:"100%",height:50,paddingLeft:20, justifyContent:'center'}}>
            <Text style={{fontWeight:"bold",fontWeight:"700"}}>{type}</Text>
        </View>
        </View> 
    )
}

export default NavigationSideiconCard