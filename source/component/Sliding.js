import React from 'react'
import { View, Image,StyleSheet, Dimensions, ScrollView } from 'react-native'

const Width =Dimensions.get('window').width;
const Height =Dimensions.get('window').height;

const Sliding = () => {
    return (
        <View style ={styles.container}>
            <View style={styles.image}>
                <ScrollView onScroll={({nativeEvent}) =>onchange(nativeEvent)} 
                showsHorizontalScrollIndicator={false} pagingEnabled horizontal >
                <Image source={require('../assests/images/1.jpg')}/>     
                <Image source={require('../assests/images/2.jpg')}/>       
                <Image source={require('../assests/images/3.jpg')}/>       
                <Image source={require('../assests/images/4.jpg')}/>       
                           
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
    flex: 1,
    },
    image:{
        width:Width,
        height:Height*0.25,
    }
})
export default Sliding