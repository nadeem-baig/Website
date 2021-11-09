import React from 'react'
import { ScrollView } from 'react-native'
import { image } from '../../assests/icons'
import ReusableCard from '../card/ReusableCard'
const firstRow = ({navigation}) => {
    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false}>
         < ReusableCard type={image.SeemoreMainDepartments}  text ={image.Headers[3]} height={200} resizeMode="contain"/>
         < ReusableCard type={image.SeemoreMainDepartments}  text ={image.Headers[4]} height={200} resizeMode="contain"/>
         < ReusableCard type={image.SeemoreMainDepartments}  text ={image.Headers[5]} height={200} resizeMode="contain"/>
         < ReusableCard type={image.SeemoreMainDepartments}  text ={image.Headers[6]} height={200} space={280} resizeMode="contain"/>
        </ScrollView>
        </>
    )
}

export default firstRow