import React from 'react'
import {View,StyleSheet,Text,ScrollView,TouchableOpacity } from 'react-native'
import Category from './Category'

const ReusableCard = ({type,Seemore=false,text,space,height,navigation,cardWidth,cardHeight,weight,font,resizeMode}) => {
    const images = Object.entries(type);
    return (
        <View style ={styles.container,[{height:space}]}>
        <ScrollView  scrollEventThrottle={16}>
            
                    <View style={{ flex: 1,width: '100%',height:height}}>
          {  text &&  <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                {text}
                            </Text>
          }
                    {
                    Seemore &&         <TouchableOpacity        onPress={()=>navigation.navigate("SeemoreMainDepartments")}      >
                    <Text style={{ fontSize: 15, fontWeight: '400', paddingHorizontal: 20,textAlign: 'right' }}>
                  See More
              </Text>      
              </TouchableOpacity>
                    }
                  

                        <View style={{ height:600,paddingTop:3, marginTop: 10}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
             {
             images.map((source,index) => 
             <Category key={index} name={source[0]} imageUri={source[1]} cardHeight={cardHeight} cardWidth={cardWidth} font={font} weight={weight} resizeMode={resizeMode}/>

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
        width:'100%',
        flexDirection:"row",
        flexWrap:"wrap",      
        justifyContent:"space-around",
    }
})
export default ReusableCard