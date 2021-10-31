import React from 'react'
import Sliding from '../component/mainscreen/Sliding'
import SearchBar from '../component/mainscreen/SearchBar'
import ReusableCard from '../component/card/ReusableCard'
import {image } from '../assests/icons'
const MainScreen = () => {
    return (
        <>
        <SearchBar />
        <Sliding />
        < ReusableCard type={image.category}  text ="Categories You can choose " space={180} height={180}/>
        < ReusableCard type={image.department} Seemore={true}  text ="Departments" height={200}/>

        </>
    )
}



export default MainScreen