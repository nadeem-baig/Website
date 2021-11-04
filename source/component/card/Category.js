import React  from "react";
import {   View, Text, Image} from "react-native";

const Category = ({name,imageUri,cardWidth=130,cardHeight=130,weight='100',font=16}) => {
return (
            <View style={{ height: cardHeight, width: cardWidth, marginLeft: 10, borderWidth: 0.5, borderColor: '#dddddd',borderRadius:10,elevation:3,shadowColor:'gray',shadowOffset:{width:0,height:10},shadowOpacity:1,shadowRadius:7 }}>
                <View style={{ flex: 2 }}>
                    <Image source={imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover',borderRadius:7 }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10}}>
                    <Text style={{    fontSize: font,  fontWeight: weight,}}>{name}</Text>
                </View>
            </View>
        );        
    
}


export default Category

