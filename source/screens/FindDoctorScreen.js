import React from 'react'
import SearchBar from '../component/mainscreen/SearchBar'
import Body from '../component/findDoctorScreen/firstRow'
import Screen from '../component/Screen'
const FindDoctorScreen = () => {
    return (
        <Screen >
            <SearchBar />
            <Body />
        </Screen>
    )
}

export default FindDoctorScreen