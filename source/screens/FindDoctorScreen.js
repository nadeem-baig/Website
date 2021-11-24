import React from 'react'
import Body from '../component/findDoctorScreen/firstRow'
import Screen from '../component/Screen'
import {image } from '../assests/icons'
const FindDoctorScreen = ({navigation}) => {
    return (
        <Screen >
            <Body navigation={navigation} images={image.SeemoreMainDepartments}/>
        </Screen>
    )
}

export default FindDoctorScreen