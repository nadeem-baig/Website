import React  from "react";
import {   View, Text, Image} from "react-native";

const Category = ({name,imageUri,cardWidth=130,cardHeight=130,weight='100',font=16,resizeMode= 'cover'}) => {
return (
            <View style={{ height: cardHeight, width: cardWidth, margin: 10, borderWidth: 0.5, borderColor: '#dddddd',borderRadius:10,elevation:3,shadowColor:'gray',shadowOffset:{width:0,height:10},shadowOpacity:1,shadowRadius:7,overflow:"hidden", backgroundColor:"rgb(220,219,218)" }}>
                <View style={{ flex: 2 }}>
                    <Image source={imageUri}
                        style={{ flex: 1, width: "100%", height: "100%", resizeMode:resizeMode,borderRadius:7 }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10}}>
                    <Text style={{    fontSize: font,  fontWeight: weight,}}>{name}</Text>
                </View>
            </View>
        );        
    
}


export default Category

