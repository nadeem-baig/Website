import React,{useState} from 'react'
import { View,Image, Text,StyleSheet,Dimensions, Alert, Modal, Pressable,ScrollView,FlatList,TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from '../../assests/colour'

const SeemoreCard = ({image,text,limit=Object.entries(image).length,Seemore=false}) => {

  const images = Object.entries(image);    
  const [modalVisible, setModalVisible] = useState(false);
  
  const ItemSeparatorView =() => {
    return (
      <View 
      style={{height:0.5,width:'100%', backgroundColor:color.bluegradiant}}
      />
    )
  }

  const ItemView =({ item}) => {
    return (
      <TouchableOpacity style ={styles.list}
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
        <>
            <Text style={styles.text}>{text}</Text>
        <View style ={styles.container}>
            {
             images.slice(0,limit).map((source,index) => 
             <View style ={styles.card}   key={index}>
             <Image  source={source[1]} style ={styles.images}  />
             <Text style={{fontWeight:"bold",fontWeight:"300"}}>{source[0]}</Text>
            </View>
            )}
                    {
        Seemore && <> 
        <View style={styles.circle}>
        <Pressable        onPress={() => setModalVisible(true)} >
        <Text style={{color:color.blue}}> See More </Text> 
      </Pressable>
        </View>
        </>
        }

<View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <Pressable onPress={() => setModalVisible(!modalVisible)}  >
              <View style={{marginBottom:10,marginLeft:20,marginTop:10}}><MaterialCommunityIcons name="close" size={30} color="black"/></View>
            </Pressable>
            <Text style={styles.modalText}>Know Speciality?</Text>
            <Text style={styles.modalText}>Select From top Specialities</Text>
                <View style={styles.body}>
                <FlatList 
        data={images}
        renderItem={ItemView}
        ItemSeparatorComponent={ItemSeparatorView}
        keyExtractor={(item,index) => index.toString()}

      />
                </View>
 
        </View>
      </Modal>
    </View>

        </View>

        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        flexWrap:"wrap",   
        justifyContent:"space-around" ,
    },
    card:{
        height:90,
        width:85,
        // margin:10, 
        // backgroundColor:"orange",
        alignItems:"center",
        padding:5,
        // borderWidth: 1,
        // borderColor: "#20232a",   
    },
    images:{
        height:40,
        width:50,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.12,
        height: Dimensions.get('window').width * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:color.backgroundColor
    },
    text:{
        marginLeft:20,
        fontSize:20,
        fontWeight:"bold",
    },
    circle:{
        marginTop:10,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.19,
        height: Dimensions.get('window').width * 0.19,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: "#20232a"
        ,backgroundColor:color.bluegradiant
    },
    centeredView: {
        flex:1,
        marginTop:'50%',
        borderRadius:30,
        backgroundColor:color.white
      },
      modalView: {
        width:"100%",
        flex:1,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      modalText: {
        marginBottom: 15,
        fontWeight: "bold",
        fontWeight: "700",
        marginLeft:50
      },
      body:{
        flex:1,
        width:"100%",
        height:"100%"

      },
      list:{
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
export default SeemoreCard