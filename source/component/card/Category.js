import React  from "react";
import {   View, Text, Image} from "react-native";

const Category = ({name,imageUri,cardWidth=150,cardHeight=160,weight='100',font=16,resizeMode= 'cover'}) => {
return (
            <View style={{ height: cardHeight, width: cardWidth, margin: 10, borderWidth: 0.5, borderColor: '#dddddd',borderRadius:10,overflow:"hidden" }}>
                <View style={{ flex: 2 }}>
                    <Image source={imageUri}
                        style={{ flex: 1, width: "100%", height: "100%", resizeMode:resizeMode,borderRadius:7 }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10}}>
                    <Text style={{    fontSize: font,  fontWeight: weight,fontWeight: "bold"}}>{name}</Text>
                </View>
            </View>
        );        
    
}


export default Category

