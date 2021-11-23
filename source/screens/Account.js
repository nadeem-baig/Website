import React from 'react'
import { View, Text,StyleSheet,Image,Button,ScrollView } from 'react-native'
import Screen from '../component/Screen'
import color from '../assests/colour'
import { Navbar } from '../assests/icons'
import NavigationSideiconCard from '../component/card/NavigationSideiconCard'
const Account = () => {
  const images = Object.entries(Navbar);
    return (
      <>
      <ScrollView>
      <Screen>
        <View style ={styles.container}>
            <View >
          <Text style={[styles.Text,{marginTop:20,fontWeight:"bold",fontWeight:"700"}]}>Hello,</Text>
          <Text style={[styles.Text,{marginTop:15}]}>MR.APPGOO EE</Text>
          <Text style={[styles.Text,{marginTop:5}]}>Your ID:- 1234567890</Text>
          <Text style={[styles.Text,{marginTop:5}]}>Email ID:- Google@Yahoo.com</Text>
          <View style={{width:70, borderWidth:1.5, borderColor: color.white,borderRadius:10,overflow:"hidden",marginLeft:20,marginTop:20}}>
          <Button
              onPress={()=>console.log("hii")}
              title="Edit"
              color={color.loginBackground}
              accessibilityLabel="Learn more about this purple button"
            />
          </View>

            </View>
            <View style={{width:"45%", alignItems:'center',justifyContent:'center',}}>
              <Image source={require('../assests/images/icon/ic_no_doctors.png')} style={styles.image}/>
            </View>
        </View>
        <View style={{flex:1,}}>
              {
             images.map((source,index) => 
             <NavigationSideiconCard type={source[0]} images={source[1]} key={index}/>

            )}

        </View>
      </Screen>
      </ScrollView>
      </>
    )
}
const styles = StyleSheet.create({
    container:{
    backgroundColor:color.loginBackground,
    height:200,
    flexDirection:"row",
    },
    Text:{
    color:color.white,
    marginLeft:20,
    marginTop:5,
    fontWeight:"600"
    },
    

})
export default Account