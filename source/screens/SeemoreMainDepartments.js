import React from 'react'
import {  ScrollView} from 'react-native'
import {image} from '../assests/icons'
import SeemoreCard from '../component/card/seemoreCard'
const SeemoreMainDepartments = () => {

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
            <SeemoreCard  image={image.SeemoreMainDepartments}  text ={image.Headers[7]}/>
            <SeemoreCard  image={image.general}  text ={image.Headers[6]}/>
            <SeemoreCard  image={image.Speciality}  text ={image.Headers[8]} limit={3} Seemore={true} />
            <SeemoreCard  image={image.Orthopedic}  text ={image.Headers[11]}/>
            <SeemoreCard  image={image.ent}  text ={image.Headers[10]}/>
            <SeemoreCard  image={image.Dermatology}  text ={image.Headers[9]}/>
            </ScrollView>
        </>
    )
}

export default SeemoreMainDepartments