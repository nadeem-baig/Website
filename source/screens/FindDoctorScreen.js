import React from 'react'
import { View,ScrollView } from 'react-native'
import Body from '../component/findDoctorScreen/firstRow'
import Screen from '../component/Screen'
import {image,SearchLinks } from '../assests/icons'
import AutoSearch from '../component/mainscreen/AutoSearch'
const FindDoctorScreen = ({navigation}) => {
    return (
        <ScrollView >

        <AutoSearch  navigation={navigation} Link={SearchLinks.diseases}/>
        <Screen >
            <Body navigation={navigation} images={image.SeemoreMainDepartments}/>
        </Screen>
        <View>
        </View>

        </ScrollView>
    )
}

export default FindDoctorScreen