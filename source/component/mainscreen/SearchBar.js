import React from 'react'
import AutoSearch from './AutoSearch'
import {SearchLinks} from '../../assests/icons'

const SearchBar = ({navigation}) => {

    return  <AutoSearch navigation={navigation} Link={SearchLinks.medicines}/>
}


export default SearchBar