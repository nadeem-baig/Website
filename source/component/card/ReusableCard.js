import React from 'react'
import {View,StyleSheet,Dimensions,Text,ScrollView,TouchableOpacity } from 'react-native'
import Category from './Category'

const ReusableCard = ({type,Seemore,text,space,height,navigation}) => {
    const images = Object.entries(type);
    return (
        <View style ={styles.container,[{height:space}]}>
        <ScrollView  scrollEventThrottle={16}>
            
                    <View style={{ flex: 1,width: '100%',height:height}}>
              <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                {text}
                            </Text>
                    {
                    Seemore &&         <TouchableOpacity        onPress={()=>navigation.navigate("SeemoreMainDepartments")}      >
                    <Text style={{ fontSize: 15, fontWeight: '400', paddingHorizontal: 20,textAlign: 'right' }}>
                  See More
              </Text>      
              </TouchableOpacity>
                    }
                  

                        <View style={{ height: 140, marginTop: 10 }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
                                                   {
             images.map((source,index) => 
             <Category key={index} name={source[0]} imageUri={source[1]}/>

            )}

                                
                            </ScrollView>
                        </View>
                        
                    </View>
                </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width,
        flexDirection:"row",
        flexWrap:"wrap",      
        justifyContent:"space-around"  
    }
})
export default ReusableCard