import React from 'react'
import {ScrollView } from 'react-native'
import {image } from '../assests/icons'
import Sliding from '../component/mainscreen/Sliding'
import ReusableCard from '../component/card/ReusableCard'
import Card from '../component/card/Card'
import Screen from '../component/Screen'
const MainScreen = ({navigation}) => {

    return (
        <Screen>
        <ScrollView  scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
        <Sliding />
        < ReusableCard type={image.category}  text ={image.Headers[0]} space={220} height={220} />
        < ReusableCard type={image.department} Seemore={true}  text ={image.Headers[1]} space={250} height={240} navigation={navigation}  />
        < Card type={image.offerscard}  text ={image.Headers[2]}  cardWidth={300} cardHeight={400} font={40} weight={'900'} />
        </ScrollView>
        </Screen>
    )
}



export default MainScreen