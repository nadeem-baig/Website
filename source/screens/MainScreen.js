import React from 'react'
import { View,Text,StyleSheet,ScrollView} from 'react-native'

import Sliding from '../component/mainscreen/Sliding'
import SearchBar from '../component/mainscreen/SearchBar'

import Category from '../component/card/Category'

const MainScreen = () => {
    return (
        <>
        <SearchBar />
        <Sliding />
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <ScrollView
                    scrollEventThrottle={16}
                >
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                            What can we help you find, Varun?
                        </Text>

                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <Category imageUri={require('../assests/images/1.jpg')}
                                    name="Home"
                                />
                                <Category imageUri={require('../assests/images/1.jpg')}
                                    name="Experiences"
                                />
                                <Category imageUri={require('../assests/images/1.jpg')}
                                    name="Resturant"
                                />
                                    <Category imageUri={require('../assests/images/1.jpg')}
                                    name="Resturant"
                                />
                                    <Category imageUri={require('../assests/images/1.jpg')}
                                    name="Resturant"
                                />
                                
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>

            </View>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default MainScreen