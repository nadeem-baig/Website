import React from 'react'
import { View, Text,Image,Dimensions } from 'react-native'
import color from '../../assests/colour'
const NavigationSideiconCard = ({type,images}) => {

    return (
        <View style={{flex:1,flexDirection:"row",width:'100%',height:50,margin:1,backgroundColor:color.white,}} >

        <Image source={images} style={{height:50,width:50,resizeMode:'contain',marginLeft:20,borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
}} />

        <View style={{width:"100%",height:50,paddingLeft:20, justifyContent:'center'}}>
            <Text style={{fontWeight:"bold",fontWeight:"700"}}>{type}</Text>
        </View>
        </View> 
    )
}

export default NavigationSideiconCard