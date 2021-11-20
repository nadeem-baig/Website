import React from 'react'
import { View, Text,StyleSheet,FlatList,TouchableOpacity,Image } from 'react-native'
import color from '../assests/colour';
import {image} from '../assests/icons'
const Account = () => {
    const images = Object.entries(image.Speciality);    
  const ItemSeparatorView =() => {
    return (
      <View 
      style={{height:0.5,width:'100%', backgroundColor:color.bluegradiant}}
      />
    )
  }

  const ItemView =({ item}) => {
    return (
      <TouchableOpacity style ={styles.container}
    //   onPress={()=>navigation.navigate("SeedetailsScreen",{data:masterData[item.id -1 ]})}
      >
          <Image source={item[1]} style={styles.image}/>
       <Text style={styles.itemStyle}>
       {item[0]}
      </Text>    
    </TouchableOpacity>

    )
  }

    return (
        <View >
        <FlatList 
        data={images}
        renderItem={ItemView}
        ItemSeparatorComponent={ItemSeparatorView}
      />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center"
    },
    itemStyle:{
        fontWeight:"bold",
        fontSize:20
    },
    image:{
    borderRadius:50,
    height:50,
    width:50,
    marginLeft:30,
    marginRight:20
    },

})
export default Account