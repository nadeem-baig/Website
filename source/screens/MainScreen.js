import React from 'react'
import {ScrollView,View,St } from 'react-native'
import {image } from '../assests/icons'
import Sliding from '../component/mainscreen/Sliding'
import SearchBar from '../component/mainscreen/SearchBar'
import ReusableCard from '../component/card/ReusableCard'
import Testfile from '../component/card/Testfile'
const MainScreen = ({navigation}) => {

    return (
        <ScrollView  scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
        <SearchBar />
        <Sliding />
        < ReusableCard type={image.category}  text ={image.Headers[0].toString()} space={180} height={180}/>
        < ReusableCard type={image.department} Seemore={true}  text ={image.Headers[1].toString()} height={200} navigation={navigation}/>
        < ReusableCard type={image.offerscard}  text ={image.Headers[2].toString()} space={400} height={400} cardWidth={300} cardHeight={300} font={40} weight={'900'} />

        </ScrollView>
    )
}



export default MainScreen