import React  from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

const Category = ({name,imageUri}) => {
return (
            <View style={{ height: 130, width: 130, marginLeft: 10, borderWidth: 0.5, borderColor: '#dddddd',elevation:3,shadowColor:'gray',shadowOffset:{width:0,height:10},shadowOpacity:1,shadowRadius:10 }}>
                <View style={{ flex: 2 }}>
                    <Image source={imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{name}</Text>
                </View>
            </View>
        );        
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default Category

