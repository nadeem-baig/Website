import React,{useState,useEffect} from 'react'
import { View, TextInput ,StyleSheet,Image, FlatList, Text,TouchableOpacity,ActivityIndicator } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from '../../assests/colour'
import Screen from '../Screen'
const autoSearch = ({navigation,Link}) => {
  const [search, setsearch] = useState('');
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [Loding, setLoging] = useState(true);
  
  useEffect(() => {
    FetchData()
  }, [])
  
  
  
  const FetchData = () => {    
    fetch(Link)
    .then(response => response.json())
    .then((responseJson) => {
      setfilterData(responseJson)
      setmasterData(responseJson)      
      setLoging(false)
    }).catch((error) => {
      console.log(error)
    })
  }

  const ItemView =({ item}) => {

    return (
      <TouchableOpacity
      onPress={()=>navigation.navigate("SeedetailsScreen",{data:masterData[item.id -1 ]})}>
       <Text style={styles.itemStyle}>
       {item.name}
      </Text>
      
    </TouchableOpacity>

    )
  }

  const ItemSeparatorView =() => {
    return (
      <View 
      style={{height:0.5,width:'100%', backgroundColor:color.bluegradiant}}
      />
    )
  }

  const searchFilter = (text) => {
    if (text){
      const newData = masterData.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      setfilterData(newData)
      setsearch(text)
    }
    else {
      setfilterData(masterData)
      setsearch(text)
    }
  }
    return (
        <>
       <Screen>
        <View style ={styles.back}>
        <View style ={styles.container}>
        <Image source = {require('../../assests/images/icon/mission.png')} style ={styles.icon}/>
        <MaterialCommunityIcons name="format-clear" size={24} color="black" style ={styles.clear} />
        <TextInput
        style={styles.input}
        value={search}           
        placeholder="Search here  .."
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        onChangeText={(text) => searchFilter(text)}
       />
        </View>
        </View>
        </Screen>
        {
          Loding &&     <View style={styles.loding}><ActivityIndicator size={100} color="rgb(120, 121, 255)" /></View>
        }
        <View style={{ flex:1}}>
          <View style={{height:'100%',width:'100%'}}> 
        <FlatList 
        data={filterData}
        keyExtractor={(item,index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
      />
      </View>
        </View>
      </>
    )
}
const styles = StyleSheet.create({
    back:{
    // backgroundColor:color.search,
    marginLeft:10,
    marginRight:10,
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
          height:20,
          width:20,
          marginLeft: 10,
      },
      itemStyle:{
        padding:10
      },
      clear:{
        alignSelf:'auto'
      },
      loding:{
        justifyContent: "center",    
      }
})
export default autoSearch