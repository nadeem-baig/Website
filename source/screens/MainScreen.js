import React from 'react'
import {image } from '../assests/icons'
import Sliding from '../component/mainscreen/Sliding'
import SearchBar from '../component/mainscreen/SearchBar'
import ReusableCard from '../component/card/ReusableCard'

const MainScreen = ({navigation}) => {

    return (
        <>
        <SearchBar />
        <Sliding />
        < ReusableCard type={image.category}  text ={image.Headers[0].toString()} space={180} height={180}/>
        < ReusableCard type={image.department} Seemore={true}  text ={image.Headers[1].toString()} height={200} navigation={navigation}/>
        < ReusableCard type={image.category}  text ={image.Headers[0].toString()} space={180} height={180}/>

        </>
    )
}



export default MainScreen