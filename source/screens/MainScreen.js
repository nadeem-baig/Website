import React from 'react'
import {ScrollView } from 'react-native'
import {image } from '../assests/icons'
import Sliding from '../component/mainscreen/Sliding'
import SearchBar from '../component/mainscreen/SearchBar'
import ReusableCard from '../component/card/ReusableCard'
import Card from '../component/card/Card'

const MainScreen = ({navigation}) => {

    return (
        <ScrollView  scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
        <SearchBar />
        <Sliding />
        < ReusableCard type={image.category}  text ={image.Headers[0]} space={180} height={180}/>
        < ReusableCard type={image.department} Seemore={true}  text ={image.Headers[1]} height={200} navigation={navigation}/>
        < Card type={image.offerscard}  text ={image.Headers[2]}  cardWidth={300} cardHeight={400} font={40} weight={'900'} />
        </ScrollView>
    )
}



export default MainScreen