import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Screen from '../component/Screen'
import Sliding from '../component/Sliding'
const MainScreen = () => {
    return (
        <Screen style ={styles.container}>
            <Sliding />
        </Screen>
    )
}
const styles = StyleSheet.create({
    container:{
    }
})
export default MainScreen