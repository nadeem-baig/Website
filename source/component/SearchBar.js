import React,{useState} from 'react'
import { View, TextInput ,StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from '../assests/colour'

const SearchBar = () => {
    const [text, onChangeText] = useState();

    return (
        <View style ={styles.back}>
        <View style ={styles.container}>
            <MaterialCommunityIcons name="shield-search" size={24} color="black" style ={styles.icon}/>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}           
        autoCapitalize="none"
        autoCorrect={false}
        name="Search"
        placeholder="Search here  .."
       />
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    back:{
    backgroundColor:color.search,
    },
    container:{
        backgroundColor:color.white,
        width: '100%',
        height: 45,
        flexDirection: 'row',
        borderRadius: 25,
        marginVertical: 10,
        alignItems: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderRadius: 20,
        padding: 10,
        width:'100%',
        marginLeft:1
      },
      icon:{
          marginTop: 5,
          marginLeft: 10,
      }
})
export default SearchBar