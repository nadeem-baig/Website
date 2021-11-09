import React from 'react'
import SearchBar from '../component/mainscreen/SearchBar'
import Body from '../component/findDoctorScreen/firstRow'
import Screen from '../component/Screen'
const FindDoctorScreen = ({navigation}) => {
    return (
        <Screen >
            <SearchBar />
            <Body navigation={navigation} />
        </Screen>
    )
}

export default FindDoctorScreen