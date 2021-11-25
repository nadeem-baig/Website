import React from 'react'
import { View, Text,StyleSheet,Image,Button } from 'react-native'
import colour from '../../assests/colour'
const CardForDoctors = ({imageuri}) => {
    return (
        <View style={{flex:0.5,flexDirection:"row",width:300,marginRight:20,marginLeft:10,marginBottom:10}} >

        <Image source={require('../../assests/images/icon/dummy_profile_pic.png')} style={{height:80,width:70,borderRadius:20}} />

        <View style={{width:"60%",height:80,paddingLeft:20}}>
            <Text style={{fontWeight:"bold",fontWeight:"700"}}>{imageuri[0]}</Text>
            <Text style={{fontWeight:"500"}}>{imageuri[1]}</Text>
            <Text style={{fontWeight:"bold",fontWeight:"700",color:colour.bluegradiant}}>$200</Text>
        </View>
        <View style={{justifyContent:'center'}}>
        <Button
        title="Book Now"
        color="blue"
        onPress={() =>console.log('Simple Button pressed')}
      />
        </View>

        </View> 
    )
}
const styles = StyleSheet.create({
    container:{
    }
})
export default CardForDoctors