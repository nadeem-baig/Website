import React,{useState,useEffect} from 'react'
import { View, TextInput ,StyleSheet,Image, FlatList, Text,TouchableOpacity } from 'react-native'
import color from '../../assests/colour'
import Screen from '../Screen'
const autoSearch = () => {
  const [search, setsearch] = useState('');
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);

  useEffect(() => {
    FetchData()
    return () => {
      
    }
  }, [])

  const FetchData = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then(response => response.json())
    .then((responseJson) => {
      setfilterData(responseJson)
      setmasterData(responseJson)
      
    }).catch((error) => {
      console.log(error)
    })
  }

  const ItemView =({ item}) => {
    return (
      <TouchableOpacity
      onPress={()=>{console.log(item.title);
      }}>
       <Text style={styles.itemStyle}>
        {item.id}{' .'}{item.title.toUpperCase()}
      </Text>
    </TouchableOpacity>

    )
  }

  const ItemSeparatorView =() => {
    return (
      <View 
      style={{height:0.5,width:'100%', backgroundColor:'blue'}}
      />
    )
  }

  const searchFilter = (text) => {
    if (text){
      const newData = masterData.filter((item) => {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase()
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
      }
})
export default autoSearch