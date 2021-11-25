import React from 'react'
import { View,ScrollView } from 'react-native'
import Screen from '../component/Screen'
import {doctors } from '../assests/icons'
import CardForDoctors from '../component/card/CardForDoctors'
const FindDoctorScreen = ({navigation}) => {
    const images = Object.entries(doctors);

    return (
        <Screen>
        <ScrollView >
            {
                           images.map((source,index) => 
                           <CardForDoctors key={index} imageuri={source}/>

                             )
                }
        </ScrollView>
        </Screen>

    )
}

export default FindDoctorScreen